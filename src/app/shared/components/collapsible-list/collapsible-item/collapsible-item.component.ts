import { Component, OnInit, Input, ContentChild, TemplateRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-item',
  templateUrl: './collapsible-item.component.html',
  styleUrls: ['./collapsible-item.component.scss']
})
export class CollapsibleItemComponent implements OnInit, AfterContentInit {
  @Input() isCollapsed: boolean = true;
  @ContentChild('top') topContent: TemplateRef<any>;
  @ContentChild('bottom') bottomContent: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.topContent, this.bottomContent);
  }

}
