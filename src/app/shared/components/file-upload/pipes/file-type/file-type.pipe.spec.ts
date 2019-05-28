import { FileTypePipe } from './file-type.pipe';

fdescribe('FileTypePipe', () => {
  let pipe: FileTypePipe;

  beforeEach(() => {
    pipe = new FileTypePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return friendly file type name by mime type', () => {
    const input = [
      'application/msword',
      'video/webm',
      'audio/ogg',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/zip'
    ]

    const output = [
      'Documento de Word',
      'Video',
      'Audio',
      'Documento de Excel',
      'Carpeta comprimida'
    ]

    for (let i in input) {
      let file: File = {
        name: '',
        lastModified: 0,
        size: 156723,
        type: input[i],
        slice: (start?: number, end?: number, contentType?: string) => new Blob()
      }

      expect(pipe.transform(file)).toBe(output[i]);
    }
  });

  it('should return friendly file type name by file extension', () => {
    const input = [
      'file.doc',
      'file.wma',
      'file.mp3',
      'file.xlsx',
      'file.rar'
    ]

    const output = [
      'Documento de Word',
      'Video',
      'Audio',
      'Documento de Excel',
      'Carpeta comprimida'
    ]

    for (let i in input) {
      let file: File = {
        name: input[i],
        lastModified: 0,
        size: 156723,
        type: '',
        slice: (start?: number, end?: number, contentType?: string) => new Blob()
      }

      expect(pipe.transform(file)).toBe(output[i]);
    }
  });
});
