import { Component, OnInit, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collapsible-item-header',
  templateUrl: './collapsible-item-header.component.html',
  styleUrls: ['./collapsible-item-header.component.scss']
})
export class CollapsibleItemHeaderComponent implements OnInit {
  onClick: EventEmitter<string>;

  constructor() {
    this.onClick = new EventEmitter();
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  handleClick(event: any): void {
    console.log(event);
    this.onClick.emit('clicked');
  }

}
