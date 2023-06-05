import { Component, OnInit } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map } from 'rxjs';
import { get as getFilesUnderFolder } from 'lodash'

enum FileTypes {
    FILE = 'file',
    FOLDER = 'folder'
}

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    data: {
        title: string,
        type: FileTypes,
        url?: string,
    }[] = []
    breadcrumbs = ''

    constructor(private readonly store: Store<{ app: ApplicationState }>, private readonly router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.breadcrumbs = decodeURIComponent(event.url).replace('/', '')
                const path = this.breadcrumbs.replaceAll('/', '.')
                this.scanFolder(path)
            }
        })
        this.scanFolder()
    }
    
    scanFolder(folderName: string = '') {
        this.store.select('app').pipe(
            map(({ files: data }) => {
                let files = {} as { [key: string]: string | object}
                if(folderName) {
                    files = getFilesUnderFolder(data, folderName) as { [key: string]: string | object}
                } else {
                    files = data
                }
                if(!files) return []
                return Object.keys(files).map(key => {
                    if(typeof files[key] === 'object') {
                        return {
                            title: key,
                            type: FileTypes.FOLDER,
                            url: folderName
                        }
                    }
                    return {
                        title: key,
                        type: FileTypes.FILE,
                        url: files[key] as string
                    }
                }).filter(file => file.title !== 'trash')
            })).subscribe((data) => {
                this.data = data
            })
    }
}