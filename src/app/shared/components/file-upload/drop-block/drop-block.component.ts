import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  selector: 'app-drop-block',
  templateUrl: './drop-block.component.html',
  styleUrls: ['./drop-block.component.scss']
})
export class DropBlockComponent implements OnInit {
  @Output() onFiles: EventEmitter<File>;
  status: 'none' | 'dragging' = 'none';
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

  dragend($event: Event): void {
    this.status = 'none';
    //console.log($event);
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
