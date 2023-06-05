import { NgModule } from '@angular/core';
import { TrashIcon } from './trash.icon';
import { FolderIcon } from './folder.icon';
import { FileIcon } from './file.icon';
import { LeftICon } from './left.icon';
import { NewFolderIcon } from './newfolder.icon';
import { UploadIcon } from './upload.icon';
import { FireIcon } from './fire.icon';
import { NewFileIcon } from './newfile.icon';
import { DirectiveComponentsIcon } from './icons.directive';
import { TrashFilledIcon } from './trashfilled.icon';
import { RestoreIcon } from './restore.icon';

const declared = [
    TrashIcon,
    FolderIcon,
    FileIcon,
    LeftICon,
    UploadIcon,
    NewFolderIcon,
    FireIcon,
    NewFileIcon,
    TrashFilledIcon,
    RestoreIcon,
    DirectiveComponentsIcon
]

@NgModule({
    declarations: declared,
    exports: declared
})
export class ComponentsIconsModule {}