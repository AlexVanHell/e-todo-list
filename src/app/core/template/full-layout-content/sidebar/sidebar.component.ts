import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { sidebarOpenClose } from '../../../../shared/animations/sidebar-open-close';
import { IUser } from '../../../../shared/models/app/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [sidebarOpenClose]
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebar') bar: ElementRef;
  @Input() user: IUser = {};
  status: boolean = false;
  options: any[] = [{
    title: 'Inicio',
    icon: 'home',
    route: '/home'
  }, {
    title: 'Opcion 1',
    icon: 'spinner',
    route: '/login'
  }];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /* this.getBarHtmlElement().style.left = -this.getBarHtmlElement().clientWidth + 'px'; */
  }

  close(): void {
    /* const elem: HTMLDivElement = this.getBarHtmlElement();
    elem.style.left = -elem.clientWidth + 'px'; */
    this.status = false;
  }

  open(): void {
    /* const elem: HTMLDivElement = this.getBarHtmlElement();
    elem.style.left = '0px'; */
    this.status = true;
  }

  getBarHtmlElement(): HTMLDivElement {
    return (this.bar.nativeElement as HTMLDivElement);
  }

}
