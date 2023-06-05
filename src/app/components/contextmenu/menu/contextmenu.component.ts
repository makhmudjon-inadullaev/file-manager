import { Component, Input } from '@angular/core'
import { ContextMenuItem } from '../contextmenu.item';


@Component({
    selector: 'components-contextmenu',
    templateUrl: './contextmenu.component.html',
})
export class ContextMenuComponent {
    contextmenuX = 0;
    contextmenuY = 0;
    contextmenu = false;
    @Input() items: ContextMenuItem[] = [];

    ngOnInit(): void {
        addEventListener('mousedown', this.closeMenu.bind(this), { capture: true });
    }
    ngOnDestroy(): void {
        removeEventListener('mousedown', this.closeMenu.bind(this), { capture: true });
    }

    closeMenu() {
        this.contextmenu = false;
    }

    onContextMenu(event: MouseEvent) {
        this.contextmenuX = event.clientX;
        this.contextmenuY = event.clientY;
        this.contextmenu = true;
        event.stopPropagation();
    }
}