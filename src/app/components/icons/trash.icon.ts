import { Component } from "@angular/core";
import { ComponentsIcon } from "./model.icons";

@Component({
    selector: 'components-icon-trash',
    template: '<svg xmlns="http://www.w3.org/2000/svg" class="my-2 w-16 h-16" viewBox="0 0 61 77"><path d="M0 10.836l7.625 59.452C7.713 73.848 18.072 77 30.5 77c13.13 0 23.49-3.15 23.828-6.712L61 10.836c-.033-.44 0-.7 0-.96C61 4.582 47.345.29 30.5.29S0 4.58 0 9.878c0 .26.033.518 0 .958zm30.5 5.753c14.74 0 26.688-3.006 26.688-6.713 0-3.707-11.95-6.713-26.688-6.713-14.74 0-26.688 3.006-26.688 6.713 0 3.707 11.95 6.712 26.688 6.712z" fill="#D8D8D8" fill-rule="evenodd"/></svg>'
})
export class TrashIcon implements ComponentsIcon {}