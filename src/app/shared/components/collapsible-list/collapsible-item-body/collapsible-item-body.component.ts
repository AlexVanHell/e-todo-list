import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-item-body',
  templateUrl: './collapsible-item-body.component.html',
  styleUrls: ['./collapsible-item-body.component.scss']
})
export class CollapsibleItemBodyComponent implements OnInit {
  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
