import { Component, Input } from '@angular/core'
import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';

@Component({
    selector: 'components-menu-contex',
    templateUrl: './context.component.html',
    animations: [
        trigger('openClose', [
            state('open', style({
                'opacity': 1,
                'max-height': '100%',
                'transform': 'translateY(0)'
            })),
            state('closed', style({
                'opacity': 0,
                'max-height': 0,
                'transform': 'translateY(20px)'
            })),
            transition('open <=> closed', [
                animate('0.05s')
            ])
        ])
    ]
})
export class MenuContextComponent {
    @Input() visible: boolean = false
    @Input() x = 0;
    @Input() y = 0;
}