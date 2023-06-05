import { createAction, props } from '@ngrx/store';

export const uploadFiles$ = createAction('[Application State] Upload Files', props<{ path: string }>());
export const deleteFile$ = createAction('[Application State] Delete File', props<{ path: string, name: string, url: string }>());
export const createNewFolder = createAction('[Application State] Create New Folder', props<{ name: string, subfolder?: boolean }>());
export const renameFile = createAction('[Application State] Rename File', props<{ name: string, newName: string }>());
export const createNewFile = createAction('[Application State] Create New File');
export const putFiles = createAction('[Application State] Put Files', props<{ path: string, files: { key: string, name: string }[] }>());
export const deleteFolder = createAction('[Application State] Delete Folder', props<{ path: string }>());
export const deleteFileState = createAction('[Application State] Delete File State', props<{ path: string, name: string }>());
export const deletePermanently = createAction('[Application State] Delete Permanently', props<{ path: string }>());
export const purgeTrash = createAction('[Application State] Purge Trash');