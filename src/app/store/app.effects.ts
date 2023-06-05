import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Observable, switchMap, map, tap, mergeMap, take, from, of, toArray } from "rxjs";
import { uploadFiles$, putFiles, deleteFile$, deleteFileState } from "./app.actions";
import * as localforage from 'localforage';

function makeid() {
    let length = 20;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

@Injectable()
export class AppEffects {
    private selectFiles = new Observable<File[]>((observer) => {
        const input = document.createElement('input')
        input.type = 'file'
        input.multiple = true
        input.onchange = (event) => {
            let inputEvent = event as any as { target: { files: FileList } }
            observer.next(Array.from(inputEvent.target.files))
        }
        input.click()
    })
    private putFiles(files: File[]) {
        return from(files).pipe(
            mergeMap((file) => {
                const key = `${Date.now()}-${makeid()}-${file.name}`
                return from(localforage.setItem.call(localforage, key, file)).pipe(map(() => ({ name: file.name, key })))
            }),
            toArray()
        )
    }
    private removeItem(key: string) {
        return new Observable((observer) => {
            localforage.removeItem(key, (error) => {
                observer.next();
                observer.complete();
            })
        });
    }

    uploadFiles$ = createEffect(() => (
        this.actions$.pipe(
            ofType(uploadFiles$),
            mergeMap(({ path }) => this.selectFiles.pipe(take(1), map((files) => ({ path, files })))),
            switchMap(({ path, files }) => this.putFiles(files).pipe(map((files) => putFiles({ path, files } )))),
        )
    ));
    removeFile$ = createEffect(() => (
        this.actions$.pipe(
            ofType(deleteFile$),
            switchMap(({ url, ...rest }) => this.removeItem(url).pipe(map(() => deleteFileState((rest))))),
        )
    ))

    constructor(private actions$: Actions) {}
}