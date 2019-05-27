import { Pipe, PipeTransform } from '@angular/core';
import { transformations } from '../../dictionary';

@Pipe({
  name: 'fileType'
})
export class FileTypePipe implements PipeTransform {

  /**
   * Returns a friendly name for file type
   * @param value File name
   * @param args
   */
  transform(value: string, args?: any): any {
    return (transformations.find(x => {
      return x.fileTypes.indexOf(value) > -1 || x.fileExtension.indexOf(value) > -1;
    }) || { name: 'Archivo' }).name;
  }

}
