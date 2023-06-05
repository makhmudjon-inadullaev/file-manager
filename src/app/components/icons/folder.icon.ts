import { Component } from '@angular/core';
import { ComponentsIcon } from './model.icons';

@Component({
    selector: 'components-icon-folder',
    template: '<svg xmlns="http://www.w3.org/2000/svg" class="my-2 w-16 h-16" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80"><defs><path id="a" d="M0 0h31l7 10h42v56H0z"/></defs><g transform="translate(0 14)" fill="none"><use fill="#FDEFB2" fill-rule="evenodd" xlink:href="#a"/><path stroke="#F4DC49" d="M.5.5v65h79v-55H37.74l-7-10H.5z"/></g></svg>'
})
export class FolderIcon implements ComponentsIcon {}
