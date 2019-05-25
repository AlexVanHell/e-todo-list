import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  @Input() item: {
    status?: 'loading' | 'loaded' | 'error',
    file?: File,
    preview?: string, progress?: number
  } = {};
  @Output() onDeleteClick: EventEmitter<any>;
  icon: string = 'file';

  constructor() {
    this.onDeleteClick = new EventEmitter();
  }

  ngOnInit() {
  }

}
