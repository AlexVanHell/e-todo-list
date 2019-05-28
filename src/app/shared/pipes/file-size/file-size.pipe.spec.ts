import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {
  it('create an instance', () => {
    const pipe = new FileSizePipe();
    expect(pipe).toBeTruthy();
  });

  it('returns expected value', () => {
    const pipe = new FileSizePipe();
    const input: any[] = [0, 1.3 * 1024, 1024 * 1024, 1024 * 1024 * 1024];
    const output: any[] = ['Byte', 'KB', 'MB', 'GB'];

    for (let i = 0; i < input.length; i++) {
      expect(pipe.transform(input[i])).toContain(output[i]);
    }
  });
});
