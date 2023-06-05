import { Component } from "@angular/core";
import { ComponentsIcon } from "./model.icons";

@Component({
    selector: 'components-icon-restore',
    template: '<svg class="ufo-icon__icon" width="16" height="16" role="none" viewBox="0 0 16 16"><path fill="currentColor" d="M13.002 8a5 5 0 0 0-5-5 4.94 4.94 0 0 0-3.316 1.282l2.316 2.12L0 8.127 1.1 1l2.098 1.92A6.958 6.958 0 0 1 8.002 1a7 7 0 0 1 0 14 6.995 6.995 0 0 1-6.256-3.872l1.8-.901C4.37 11.865 6.046 13 8.003 13a5 5 0 0 0 5-5h-.001z"></path></svg>'
    })
export class RestoreIcon implements ComponentsIcon {}