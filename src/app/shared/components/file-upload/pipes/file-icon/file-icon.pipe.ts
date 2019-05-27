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
  transform(value: string, args?: any): any {
    return (transformations.find(x => {
      return x.fileTypes.indexOf(value) > -1 || x.fileExtension.indexOf(value) > -1;
    }) || { icon: 'file' }).icon;
  }

}
