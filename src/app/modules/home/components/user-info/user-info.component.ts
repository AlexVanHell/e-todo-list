import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../../../shared/models/app/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() user: IUser = {};

  @Output() onLogoutClick: EventEmitter<string>;

  constructor() {
    this.onLogoutClick = new EventEmitter();
  }

  ngOnInit() {
  }

  handleLogoutClick(): void {
    this.onLogoutClick.emit('Clicked!!!');
  }

}
