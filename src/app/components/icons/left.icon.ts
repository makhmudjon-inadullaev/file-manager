import { Component } from '@angular/core'
import { ComponentsIcon } from './model.icons';

@Component({
    selector: 'components-icon-left',
    template: `<svg width="16" height="16" role="none" viewBox="0 0 16 16"><path fill="currentColor" d="M16 7H3.8l5.6-5.6L8 0 0 8l8 8 1.4-1.4L3.8 9H16z"></path></svg>`
})
export class LeftICon implements ComponentsIcon {}