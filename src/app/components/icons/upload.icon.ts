import { Component } from "@angular/core";
import { ComponentsIcon } from "./model.icons";

@Component({
    selector: 'components-icon-upload',
    template: '<svg class="ufo-icon__icon" width="16" height="16" role="none" viewBox="0 0 16 16"><path fill="currentColor" d="M1 13v2h14v-2H1z M2 7h3v5h6V6.969L14 7L8 1L2 7z"></path></svg>'
})
export class UploadIcon implements ComponentsIcon {}