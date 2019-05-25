import { Component, OnInit, OnDestroy } from '@angular/core';
import { deleteSlide } from '../../animations/delete-slide';
import { Subscription } from 'rxjs';
import { FileUploadService } from './service/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  animations: [deleteSlide]
})
export class FileUploadComponent implements OnInit, OnDestroy {
  list: {
    index: number,
    status: 'loading' | 'loaded' | 'error',
    file?: File,
    preview?: string,
    progress?: number
  }[] = [];
  filesSubscription: Subscription;

  constructor(
    private fuService: FileUploadService
  ) { }

  ngOnInit() {
    this.listenFiles();
  }

  ngOnDestroy() {
    if (this.filesSubscription) {
      this.filesSubscription.unsubscribe();
    }
  }

  listenFiles(): void {
    let previousLength = this.list.length;
    this.filesSubscription = this.fuService.fileUpdate
      .subscribe(data => {
        const index = data.index;

        if (this.list[index]) {
          this.list[index] = Object.assign(this.list[index], data);
        } else {
          this.list.push(data);
        }
      });
  }

  deleteItem(index: number): void {
    this.list.splice(index, 1);
  }

}
