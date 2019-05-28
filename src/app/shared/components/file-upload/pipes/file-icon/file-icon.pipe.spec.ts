import { FileIconPipe } from './file-icon.pipe';

fdescribe('FileIconPipe', () => {
  let pipe: FileIconPipe;

  beforeEach(() => {
    pipe = new FileIconPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return icon color by file mime type', () => {
    const input = [
      'application/msword',
      'video/webm',
      'audio/ogg',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/zip'
    ]

    const output = [
      'blue',
      'orange',
      'cyan',
      'green',
      'dark-gray'
    ]

    for (let i in input) {
      let file: File = {
        name: '',
        lastModified: 0,
        size: 156723,
        type: input[i],
        slice: (start?: number, end?: number, contentType?: string) => new Blob()
      }

      expect(pipe.transform(file, 'color')).toBe(output[i]);
    }
  });

  it('should return icon name by file mime type', () => {
    const input = [
      'application/msword',
      'video/webm',
      'audio/ogg',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/zip'
    ]

    const output = [
      'file-word',
      'file-video',
      'file-audio',
      'file-excel',
      'file-archive'
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
});
