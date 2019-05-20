import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() onMenuClick: EventEmitter<boolean>;

  constructor() {
    this.onMenuClick = new EventEmitter();
  }

  ngOnInit() {
  }

  openSidebar(): void {
    this.onMenuClick.emit(true);
  }

}
