import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  monthLabels: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  transform(value: string | Date, args?: any): any {
    let dateTransform: Date = null;

    if (value instanceof Date) {
      dateTransform = value;
    } else {
      dateTransform = new Date(value);
    }

    let year: string = dateTransform.getFullYear().toString();
    let month: number = dateTransform.getMonth();
    let day: string = this.fillDigits(dateTransform.getDate());
    let hours: string = this.fillDigits(dateTransform.getHours());
    let minutes: string = this.fillDigits(dateTransform.getMinutes());
    let seconds: string = this.fillDigits(dateTransform.getSeconds());
    let monthLabel: string = this.monthLabels[month];

    if (args === 'short') {
      monthLabel = monthLabel.substr(0, 3);
    }

    return `${day} ${monthLabel} ${year} a las ${hours}:${minutes}`;
  }

  fillDigits(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

}
