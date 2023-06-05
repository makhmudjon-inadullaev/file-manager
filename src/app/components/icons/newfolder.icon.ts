import { Component } from "@angular/core";
import { ComponentsIcon } from "./model.icons";

@Component({
    selector: 'components-icon-newfolder',
    template: '<svg class="ufo-icon__icon" width="24" height="24" role="none" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="#FDEFB2" d="M0 0h8.8L10 3h12v15H0z"></path><path stroke="#F4DC49" d="M.5.5v17h21v-14H9.661l-1.2-3H.5z"></path></g><path fill="#EDC100" d="M11 7v3H8v1h3v3h1v-3h3v-1h-3V7z"></path></g></svg>'
})
export class NewFolderIcon implements ComponentsIcon {}