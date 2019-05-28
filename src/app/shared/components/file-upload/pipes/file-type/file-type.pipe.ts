import { Pipe, PipeTransform } from '@angular/core';
import { transformations } from '../../dictionary';

@Pipe({
  name: 'fileType'
})
export class FileTypePipe implements PipeTransform {

  /**
   * Returns a friendly name for file type
   * @param value File
   * @param args
   */
  transform(value: File, args?: any): any {
    let fileExt: string = value.name.substring(value.name.lastIndexOf('.') + 1, value.name.length);

    return (transformations.find(x => {
      return x.fileTypes.indexOf(value.type) > -1 || x.fileExtensions.indexOf(fileExt) > -1;
    }) || { name: 'Archivo' }).name;
  }

}
