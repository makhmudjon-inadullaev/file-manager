import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { ContextMenuItem } from '../contextmenu.item';
import { DirectiveComponentsIcon } from '../../icons/icons.directive';
import { ComponentsIcon } from '../../icons/model.icons';
import { twMerge } from 'tailwind-merge';


@Component({
    selector: 'components-menu-item',
    templateUrl: './item.component.html',
})
export class ContextMenuItemComponent implements OnInit {
    @Input() item!: ContextMenuItem;
    @Output() close: EventEmitter<void> = new EventEmitter<void>();
    @ViewChild(DirectiveComponentsIcon, {static: true}) componentsIcon!: DirectiveComponentsIcon;

    ngOnInit(): void {
        if(this.item.icon) {
            const viewContainerRef = this.componentsIcon.viewContainerRef;
            viewContainerRef.clear();
            viewContainerRef.createComponent<ComponentsIcon>(this.item.icon);
        }
    }

    get className() {
        let defaultClass = 'px-6 py-2 flex items-center w-full gap-3 text-start hover:bg-gray-100'
        if(typeof this.item?.data.className === 'string') {
            return this.item.data.className
        }
        if(typeof this.item?.data.className === 'object' && this.item.data.className.merge) {
            return twMerge(defaultClass, this.item.data.className.value)
        }
        return defaultClass
    }

    preventPropagation(e: Event) {
        e.stopPropagation();
        e.preventDefault();
    }

    handleClick(e: Event) {
        this.preventPropagation(e)
        this.item.data.onClick(this.item);
    }
}