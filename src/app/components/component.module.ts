import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContentComponent } from './content/content.component';
import { ComponentsIconsModule } from './icons/icons.module';
import { ItemComponent } from './item/item.component';
import { AppTrashComponent } from './trash/trash.component';
import { AppFolderComponent } from './folder/folder.component';
import { AppFileComponent } from './file/file.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuModule } from './contextmenu/contextmenu.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        AppContentComponent,
        AppTrashComponent,
        AppFolderComponent,
        AppFileComponent,
        ItemComponent,
    ],
    imports: [CommonModule, ContextMenuModule, BrowserModule, BrowserAnimationsModule, ComponentsIconsModule, RouterModule],
    exports: [AppContentComponent, AppTrashComponent, AppFolderComponent, AppFileComponent],
})
export class ComponentsModule {}