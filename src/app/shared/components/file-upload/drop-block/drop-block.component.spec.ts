import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropBlockComponent } from './drop-block.component';

describe('DropBlockComponent', () => {
  let component: DropBlockComponent;
  let fixture: ComponentFixture<DropBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
