import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  selector: 'app-drop-block',
  templateUrl: './drop-block.component.html',
  styleUrls: ['./drop-block.component.scss']
})
export class DropBlockComponent implements OnInit {
  @Output() onFiles: EventEmitter<File>;
  status: 'none' | 'dragging' | 'leave' = 'none';
  @Input() length: number = 0;

  constructor(
    private fuService: FileUploadService
  ) {
    this.onFiles = new EventEmitter();
  }

  ngOnInit() {
  }

  triggerInput(input: HTMLInputElement) {
    input.click();
  }

  handleFiles($event: Event): void {
    this.fuService.handleUpload((<any>$event.target).files, this.length);
  }

  dragover($event: Event): void {
    $event.preventDefault();
    this.status = 'dragging';
  }

  dragleave($event: Event): void {
    $event.preventDefault();
    this.status = 'leave';
  }

  drop($event: Event): void {
    $event.preventDefault();
    this.status = 'none';

    this.fuService.handleDrop($event)
      .then(files => {
        this.handleFiles(<any>{ target: { files } });
      });
  }
}
