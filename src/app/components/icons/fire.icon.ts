import { Component } from "@angular/core";
import { ComponentsIcon } from "./model.icons";

@Component({
    selector: 'components-icon-fire',
    template: '<svg class="ufo-icon__icon" width="16" height="16" role="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.412 16.02C1.044 14.175-.22 11.745.62 8.73 1.717 4.784 6.38 2.414 5.962.02c2.274.288 5.675 4.796 5.044 8.71.847-.257 1.5-1.343 1.96-3.26 3.272 4.444 2.62 7.96-1.96 10.55-5.1-2.028-4.868-4.935-5.044-5.33-.886 1.493-1.403 3.27-1.55 5.33z"></path></svg>'
})
export class FireIcon implements ComponentsIcon {}