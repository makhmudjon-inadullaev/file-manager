type FilesType = { [key: string]: string | FilesType }

type ApplicationState = {
    files: FilesType & { 'trash': FilesType }
}

type StoreType = { app: ApplicationState }