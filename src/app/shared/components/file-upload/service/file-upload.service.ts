import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FileUploadService {
  fileUpdate: Subject<{
    index: number,
    status: 'loading' | 'loaded' | 'error',
    file?: File,
    preview?: string,
    progress?: number
  }>

  constructor() {
    this.fileUpdate = new Subject();
  }

  handleUpload(files: File[], start: number): void {
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onloadstart = (event) => {
        this.fileUpdate.next({
          index: start + i,
          status: 'loading',
          file: null,
          progress: 0
        });
      }

      reader.onprogress = (event) => {
        this.fileUpdate.next({
          index: start + i,
          status: 'loading',
          progress: (event.loaded / event.total) * 100
        });
      }

      reader.onload = (event) => {
        this.fileUpdate.next({
          index: start + i,
          status: 'loading',
          preview: (<any>event.target).result,
          file: files[i]
        });
      }

      reader.onloadend = (event) => {
        setTimeout(() => {
          this.fileUpdate.next({
            index: start + i,
            status: 'loaded'
          });
        }, 1000);
      }

      reader.onerror = (event) => {
        this.fileUpdate.next({
          index: start + i,
          status: 'error'
        });
      }

      reader.readAsArrayBuffer(files[i]);
    }
  }

  async handleDrop(event: Event): Promise<File[]> {
    event.preventDefault();

    try {
      let files: File[] = [];
      let dt: DataTransfer = (event as any).dataTransfer;

      if (dt.items) {
        for (let i in dt.items) {
          const item = dt.items[i];

          if (item.kind === 'file') {
            files.push(item.getAsFile());
          }
        }
      } else {
        for (let i in dt.files) {
          files.push(dt.files[i]);
        }
      }

      return files;
    } catch (err) {
      throw err;
    }
  }
}
