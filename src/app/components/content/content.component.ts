import { OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ContextMenuItem } from '../contextmenu/contextmenu.item';
import { NewFileIcon } from '../icons/newfile.icon';
import { NewFolderIcon } from '../icons/newfolder.icon';
import { UploadIcon } from '../icons/upload.icon';
import { createNewFolder, uploadFiles$ } from 'src/app/store/app.actions';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html'
})
export class AppContentComponent implements OnInit, OnDestroy {
    @Input() breadcrumbs = ''
    @ViewChild('newFolderDialog') newFolderDialog!: ElementRef<HTMLDialogElement>
    @ViewChild('inProgressDialog') inProgressDialog!: ElementRef<HTMLDialogElement>

    menuItems: ContextMenuItem[] = [
        new ContextMenuItem(NewFileIcon, {
            title: 'New File',
            onClick: () => this.inProgressDialog.nativeElement.showModal()
        }),
        new ContextMenuItem(NewFolderIcon, {
            title: 'New Folder',
            onClick: () => this.newFolderDialog.nativeElement.showModal()
        }),
        new ContextMenuItem(UploadIcon, {
            title: 'Upload files',
            className: 'px-6 flex w-full items-center text-start py-3 -mb-2 gap-2 border-t-gray-200 bg-gray-100 border-t hover:bg-gray-50',
            onClick: this.menuActionUploadFiles.bind(this)
        })
    ]

    constructor(private readonly router: Router, private readonly store: Store<StoreType>) {}

    ngOnInit(): void {
        addEventListener('keydown', this.onDocumentKeyDown.bind(this));
    }
    ngOnDestroy(): void {
        removeEventListener('keydown', this.onDocumentKeyDown.bind(this));
    }
    onDocumentKeyDown(event: KeyboardEvent) {
        if((<HTMLInputElement>event.currentTarget).tagName === 'INPUT') {
            return event.stopPropagation();
        }
        if (event.key === 'Backspace') {
            this.onBackClick()
        }
    }
    
    get data(): { title: string, paths: string[] } {
        if(this.breadcrumbs) {
            const [last, ...rest] = this.breadcrumbs.split('/').reverse()
            return {
                title: last,
                paths: rest.reverse()
            }
        }
        return {
            title: '',
            paths: []
        }
    }

    onPathClick(index: number) {
        let paths = []
        for(let i = 0; i < this.data.paths.length; i++) {
            paths.push(this.data.paths[i])
            if(index === i) break
        }
        this.router.navigate(paths)
    }

    onBackClick() {
        this.router.navigate(this.data.paths.length ? this.data.paths : ['/'])
    }

    menuActionNewFolder(element: HTMLInputElement) {
        const folderName = element.value
        if(!folderName || !folderName.trim()) return
        if(this.breadcrumbs) {
            element.value = ''
            this.store.dispatch(createNewFolder({ name: folderName + '.' + this.breadcrumbs.replaceAll('/', '.'), subfolder: true }))
            return this.newFolderDialog.nativeElement.close()
        }
        element.value = ''
        this.store.dispatch(createNewFolder({  name: folderName }))
        this.newFolderDialog.nativeElement.close()
    }

    menuActionUploadFiles() {
        if(this.breadcrumbs) {
            return this.store.dispatch(uploadFiles$({ path: this.breadcrumbs.replaceAll('/', '.') }))
        }
        this.store.dispatch(uploadFiles$({ path: '' }))
    }
}