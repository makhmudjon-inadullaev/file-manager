import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContextMenuItem } from '../contextmenu/contextmenu.item';
import { Store } from '@ngrx/store';
import { deleteFolder, deletePermanently } from 'src/app/store/app.actions';
import { RestoreIcon } from '../icons/restore.icon';
import { FireIcon } from '../icons/fire.icon';
import { map } from 'rxjs'

@Component({
    selector: 'app-folder',
    templateUrl: './folder.component.html'
})
export class AppFolderComponent {
    @Input() title: string = 'New Folder';
    @Input() path: string = '';
    inTrash = false;

    menuItems: ContextMenuItem[] = [
        new ContextMenuItem(null, {
            title: 'Open',
            onClick: this.handleClick.bind(this)
        }),
        ...['Download [.zip]', 'Rename']
        .map((title) => new ContextMenuItem(null, {
            title,
            className: {
                value: 'text-gray-300',
                merge: true,
            },
            onClick() {}
        })),
        new ContextMenuItem(null, {
            title: 'Delete',
            onClick: this.menuActionDelete.bind(this)
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

    constructor(private readonly router: Router, private readonly store: Store<StoreType>) {}

    ngOnInit(): void {
        this.store.select('app')
        .pipe(map(app => Object.keys(app.files.trash)))
        .subscribe((trashKeys) => {
            this.inTrash = trashKeys.includes(this.title);
        });
    }

    handleClick() {
        if(!this.inTrash) {
            this.router.navigate([...this.path.split('.'), this.title]);
        }
    }

    menuActionDelete() {
        let path = decodeURIComponent(this.router.url).replace('/', '').replaceAll('/', '.')
        this.store.dispatch(deleteFolder({ path: path ? `${path}.${this.title}` : this.title }))
    }
    menuTrashActionDelete() {
        this.store.dispatch(deletePermanently({ path: this.title }));
    }
}
