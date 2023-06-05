import { Type } from '@angular/core';
import { ComponentsIcon } from '../icons/model.icons';

export class ContextMenuItem {
  constructor(
    public icon: Type<ComponentsIcon> | null,
    public data: {
        title: string,
        className?: string | { value: string, merge: boolean },
        onClick: (item: ContextMenuItem) => void
    }) {}
}
