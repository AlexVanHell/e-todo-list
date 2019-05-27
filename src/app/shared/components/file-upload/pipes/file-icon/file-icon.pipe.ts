import { Pipe, PipeTransform } from '@angular/core';
import { transformations } from '../../dictionary';

@Pipe({
  name: 'fileIcon'
})
export class FileIconPipe implements PipeTransform {

  /**
   *
   * @param value File name
   * @param args
   */
  transform(value: File, args: 'icon' | 'color' = 'icon'): any {
    let fileExt: string = value.name.substring(value.name.lastIndexOf('.') + 1, value.name.length - 1);

    return (transformations.find(x => {
      return x.fileTypes.indexOf(value.type) > -1 || x.fileExtensions.indexOf(fileExt) > -1;
    }) || { [args]: args === 'icon' ? 'file' : '#616161' })[args];
  }

}
