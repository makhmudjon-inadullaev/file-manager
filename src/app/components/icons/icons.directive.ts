import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[components-icon]',
})
export class DirectiveComponentsIcon {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

