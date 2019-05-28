import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileItemComponent } from './file-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

describe('FileItemComponent', () => {
  let component: FileItemComponent;
  let fixture: ComponentFixture<FileItemComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileItemComponent],
      imports: [FontAwesomeModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    library.add(fas);
    fixture = TestBed.createComponent(FileItemComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit same item on delete button click', () => {
    const button = compiled.querySelector('button.btn.btn-danger') as HTMLButtonElement;

    spyOn(component.onDeleteClick, 'emit');

    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.onDeleteClick.emit).toHaveBeenCalledWith(component.item);
  });

  it('should render "Archivo" when item.name is falsy', () => {
    const titleElem = compiled.querySelector('h5');
    component.item = {};

    expect(titleElem.textContent.trim()).toBe('Archivo');
  });

  it('should render item.name when item.name is truthy', () => {
    const titleElem = compiled.querySelector('h5');
    component.item = { };
    fixture.detectChanges();

    expect(titleElem.textContent.trim()).toBe(component.item.file.name);
  });
});
