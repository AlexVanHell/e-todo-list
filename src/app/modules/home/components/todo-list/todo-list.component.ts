import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  list: any[] = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.list = this.generateList(10);
    }, 2000);
  }

  generateList(size: number): any[] {
    return Array(size)
      .fill(null)
      .map((item, i) => {
        let hour = (i + 5) % 23;
        let date = new Date();
        date.setMonth(date.getMonth() + 1);
        date.setDate(date.getDate() + i + 1);
        date.setHours(hour, 0, 0, 0);

        return {
          title: 'Cosa por hacer ' + (i + 1).toString(),
          description: 'Una descripción chida',
          date: date
        }
      })
  }

}
