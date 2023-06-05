import { NgModule } from '@angular/core';
import { MenuContextComponent } from './context/context.component';
import { ContextMenuComponent } from './menu/contextmenu.component';
import { ContextMenuItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';
import { ComponentsIconsModule } from '../icons/icons.module';

@NgModule({
    imports: [CommonModule, ComponentsIconsModule],
    declarations: [
        MenuContextComponent,
        ContextMenuComponent,
        ContextMenuItemComponent,
    ],
    exports: [ContextMenuComponent],
})
export class ContextMenuModule {}