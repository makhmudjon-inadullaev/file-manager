import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContextMenuItem } from '../contextmenu/contextmenu.item';
import { FireIcon } from '../icons/fire.icon';
import { Store } from '@ngrx/store';
import { map } from 'rxjs'
import { purgeTrash } from '../../store/app.actions'

@Component({
    selector: 'app-trash',
    templateUrl: './trash.component.html'
})

export class AppTrashComponent {
    title = 'Trash';
    contextmenuX = 0;
    contextmenuY = 0;
    contextmenu = false;
    empty = false
    @ViewChild('emptyTrashDialog') emptyTrashDialog!: ElementRef<HTMLDialogElement>

    menuItems: ContextMenuItem[] = [
        new ContextMenuItem(null, {
            title: 'Open',
            onClick: this.handleClick.bind(this)
        }),
        new ContextMenuItem(FireIcon, {
            title: 'Empty Trash',
            onClick: () => this.emptyTrashDialog.nativeElement.showModal()
        })
    ]

    constructor(private readonly router: Router, private readonly store: Store<StoreType>) {}

    ngOnInit(): void {
        this.store.select('app').pipe(
            map(app => app.files.trash),
            map(trash => Object.keys(trash))
        ).subscribe((trash) => {
            this.empty = !trash.length
        });
    }

    handleClick() {
        this.router.navigate(['/trash']);
    }

    purgeTrash() {
        this.store.dispatch(purgeTrash())
        this.emptyTrashDialog.nativeElement.close()
    }
}