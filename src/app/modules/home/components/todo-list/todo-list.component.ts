import { Component, OnInit } from '@angular/core';
import { MainConfirmationModalService } from '../../../../shared/components/main-confirmation-modal/service/main-confirmation-modal.service';
import { deleteSlide } from '../../../../shared/animations/delete-slide';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [deleteSlide]
})
export class TodoListComponent implements OnInit {
  list: any[] = [];

  constructor(
    private mcmService: MainConfirmationModalService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.list = this.generateList(40);
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
          id: (i + 1),
          title: 'Cosa por hacer ' + (i + 1).toString(),
          description: 'Una descripción chida',
          date: date
        }
      })
  }

  deleteItem(item: any): void {
    this.mcmService.show({
      body: `Estas seguro que deseas eliminar el elemento: "${item.title}"?`,
      title: 'Eliminar elemento',
      important: true
    }).then(value => {
      if (value.accepted) {
        let index = this.list.findIndex(x => x.id === item.id);
        this.list.splice(index, 1);
        this.list = this.list.slice();
      }
    });
  }

  toggleItem(item: any): void {
    this.mcmService.show({
      body: `Estás seguro de ${ item.active ? 'Desactivar' : 'Activar' } el elemento: "${item.title}"`,
      title: item.active ? 'Desactivar' : 'Activar'
    }).then(value => {
      if (value.accepted) {
        item.active = !item.active;
      }
    });
  }

}
