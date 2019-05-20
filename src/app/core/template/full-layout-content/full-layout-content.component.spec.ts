import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutContentComponent } from './full-layout-content.component';

describe('FullLayoutContentComponent', () => {
  let component: FullLayoutContentComponent;
  let fixture: ComponentFixture<FullLayoutContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLayoutContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
