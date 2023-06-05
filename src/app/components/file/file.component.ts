import { Component, Input } from '@angular/core';
import { ContextMenuItem } from '../contextmenu/contextmenu.item';
import { Store } from '@ngrx/store';
import { deleteFile$, deletePermanently } from 'src/app/store/app.actions';
import { Router } from '@angular/router';
import { RestoreIcon } from '../icons/restore.icon';
import { FireIcon } from '../icons/fire.icon';
import { map } from 'rxjs'
import * as localforage from 'localforage';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html'
})
export class AppFileComponent {
    @Input() title: string = 'New File';
    @Input() url?: string = '';
    inTrash = false;

    constructor(private readonly store: Store<StoreType>, private readonly router: Router) {}

    menuItems: ContextMenuItem[] = [
        new ContextMenuItem(null, {
            title: 'Open',
            onClick: this.handleClick.bind(this, false)
        }),
        new ContextMenuItem(null, {
            title: 'Download',
            onClick: this.handleDownload.bind(this)
        }),
        ...['Rename', 'Copy']
        .map((title) => new ContextMenuItem(null, {
            title,
            className: {
                value: 'text-gray-300',
                merge: true,
            },
            onClick: () => {}
        })),
        new ContextMenuItem(null, {
            title: 'Delete',
            onClick: this.handleDelete.bind(this)
        }),
    ]
    trashMenuItems: ContextMenuItem[] = [
        new ContextMenuItem(RestoreIcon, {
            title: 'Restore',
            className: {
                value: 'text-gray-300',
                merge: true,
            },
            onClick: () => {},
        }),
        new ContextMenuItem(FireIcon, {
            title: 'Delete Permanently',
            onClick: this.menuTrashActionDelete.bind(this)
        })
    ]

    ngOnInit(): void {
        this.store.select('app')
        .pipe(map(app => Object.keys(app.files.trash)))
        .subscribe((trashKeys) => {
            this.inTrash = trashKeys.includes(this.title);
        });
    }

    handleClick(returnValue?: boolean ) {
        if(!this.inTrash) {
            localforage.getItem(this.url!, (error, value) => {
                if(error) {
                    return console.error(error)
                }
                const url = URL.createObjectURL(value as File)
                if(returnValue) return url
                window.open(url, '_blank')
            })
        }
        return null
    }
    handleClicked(event: Event) {
        (event.target as HTMLButtonElement).focus()
        this.handleClick()
    }

    handleDownload() {
        const a = document.createElement('a')
        a.href = this.handleClick(true) || ''
        a.download = this.title
        a.click()
    }
    handleDelete() {
        let path = decodeURIComponent(this.router.url).replace('/', '').replaceAll('/', '.')
        this.store.dispatch(deleteFile$({ path, name: this.title, url: this.url || '' }))
    }
    menuTrashActionDelete() {
        this.store.dispatch(deletePermanently({ path: this.title }));
    }
}
