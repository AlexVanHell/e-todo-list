import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item-actions',
  templateUrl: './todo-item-actions.component.html',
  styleUrls: ['./todo-item-actions.component.scss']
})
export class TodoItemActionsComponent implements OnInit {
  @Output() onDeleteClick: EventEmitter<boolean>;
  @Output() onToggleClick: EventEmitter<boolean>;
  @Input() item: any = {};

  constructor() {
    this.onDeleteClick = new EventEmitter();
    this.onToggleClick = new EventEmitter();
  }

  ngOnInit() {
  }

  delete(): void {
    this.onDeleteClick.emit(true);
  }

}
