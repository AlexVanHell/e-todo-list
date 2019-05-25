import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
  private sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  transform(value: number, args?: any): any {
    if (value == 0) return '0 Byte';

    const i: number = Math.floor(Math.log(value) / Math.log(1024));

    return (value / Math.pow(1024, i)).toFixed(2) + ' ' + this.sizes[i];
  }

}
