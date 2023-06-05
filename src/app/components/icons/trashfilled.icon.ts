import { Component } from "@angular/core";
import { ComponentsIcon } from "./model.icons";

@Component({
    selector: 'components-icon-trash-filled',
    template: '<svg xmlns="http://www.w3.org/2000/svg" class="my-2 w-16 h-16" viewBox="0 0 112 145"><g fill="none" fill-rule="evenodd"><path d="M0 24.25l14 108.5c.16 6.5 19.18 12.25 42 12.25 24.106 0 43.126-5.75 43.75-12.25L112 24.25c-.06-.803 0-1.274 0-1.75C112 12.835 86.928 5 56 5S0 12.835 0 22.5c0 .476.06.947 0 1.75z" fill="#A7A7A7"/><path d="M56 35c27.062 0 49-5.596 49-12.5S83.062 10 56 10 7 15.596 7 22.5 28.938 35 56 35z" fill="#333"/><path d="M57.298 35.154c-21.414.042-35.788-3.68-35.788-3.68L23.598 1.61l70.827 4.954-1.84 24.273S78.713 35.113 57.3 35.154z" fill="#D8D8D8"/><path d="M13.345 28.696l-2.468-20.1 70.11-8.61 5.042 32.448s-13.365 3.353-38.36 2.462c-24.996-.89-34.325-6.2-34.325-6.2z" fill="#F6F6F6"/><path d="M26.033 32.618L31.26 8.406l69.744 14.612-.905 4.97s-11.683 6.745-38.756 7.058c-27.073.314-35.31-2.428-35.31-2.428z" fill="#FFF"/></g></svg>'
})
export class TrashFilledIcon implements ComponentsIcon {}