import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebar') bar: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.bar);
    this.getBarHtmlElement().style.left = -this.getBarHtmlElement().clientWidth + 'px';
  }

  close(): void {
    const elem: HTMLDivElement = this.getBarHtmlElement();
    elem.style.left = -elem.clientWidth + 'px';
  }

  open(): void {
    const elem: HTMLDivElement = this.getBarHtmlElement();
    elem.style.left = '0px';
  }

  getBarHtmlElement(): HTMLDivElement {
    return (this.bar.nativeElement as HTMLDivElement);
  }

}
