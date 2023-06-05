import { createReducer, on, Action } from "@ngrx/store"
import { createNewFile, createNewFolder, deleteFileState, deleteFolder, deletePermanently, purgeTrash, putFiles, renameFile } from "./app.actions"
import { get, cloneDeep, unset } from 'lodash'

const PERSISTENT_STATE_NAME = 'file-manager'

const initialState: ApplicationState = JSON.parse(localStorage.getItem(PERSISTENT_STATE_NAME) || JSON.stringify({
    files: {
        trash: {}
    }
}))

export const reducer = createReducer(
    initialState,
    on(renameFile, (state) => ({ ...state })),
    on(createNewFile, (state) => ({ ...state })),
    on(putFiles, (state, { files, path }) => {
        const newState = cloneDeep(state)
        let folder = newState.files as { [key: string]: {}}
        if(path) {
            folder = get(newState.files, path) as { [key: string]: {}}
        }
        files.forEach(({ key, name }) => {
            folder[name] = key
        })
        return newState
    }),
    on(createNewFolder, (state, { name, subfolder }) => {
        const newState = cloneDeep(state)
        if(subfolder) {
            const [folderName, ...rest] = name.split('.')
            const parentFolder = get(newState.files, rest.join('.')) as { [key: string]: {} }
            parentFolder[folderName] = {}
            return newState
        }
        return {
            ...state,
            files: {
                ...state.files,
                [name]: {}
            }
        }
    }),
    on(deleteFolder, (state, { path }) => {
        const newState = cloneDeep(state)
        const target = get(newState.files, path)
        unset(newState.files, path)
        const fileName = path.split('.').pop() || ''
        newState.files.trash[fileName] = target
        return newState
    }),
    on(deleteFileState, (state, { path, name }) => {
        const newState = cloneDeep(state)
        const folder = get(newState.files, path) as { [key: string]: string }
        if(folder) {
            newState.files.trash[name] = folder[name]
            delete folder[name]
            return newState
        }
        newState.files.trash[name] = newState.files[name]
        delete newState.files[name]
        return newState
    }),
    on(deletePermanently, (state, { path }) => {
        const newState = cloneDeep(state)
        delete newState.files.trash[path]
        return newState
    }),
    on(purgeTrash, (state) => ({ ...state, files: { ...state.files, trash: {} } })),
)

export function appReducer(state: ApplicationState | undefined, action: Action) {
    const result = reducer(state, action)
    localStorage.setItem('file-manager', JSON.stringify(result))
    return result
}