import { Component } from '@angular/core'
import { ComponentsIcon } from './model.icons';

@Component({
    selector: 'components-icon-file',
    template: '<svg xmlns="http://www.w3.org/2000/svg" class="my-2 w-16 h-16" viewBox="0 0 80 80"><g fill="none" fill-rule="evenodd"><path fill="#CCC" d="M10 0h45v15h15v65H10z"/><path fill="#FFF" d="M11 1h44v14h14v64H11z"/><path fill="#33ABDF" fill-rule="nonzero" d="M55 0l15 15H55z"/><path d="M20 51h40v2H20v-2zm0 5h40v2H20v-2zm0-10h40v2H20v-2zm0-5h40v2H20v-2zm0-5h40v2H20v-2zm0-5h40v2H20v-2z" fill="#0097D7" fill-rule="nonzero"/></g></svg>'
})
export class FileIcon implements ComponentsIcon {}