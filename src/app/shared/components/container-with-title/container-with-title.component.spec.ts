import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerWithTitleComponent } from './container-with-title.component';

describe('ContainerWithTitleComponent', () => {
  let component: ContainerWithTitleComponent;
  let fixture: ComponentFixture<ContainerWithTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerWithTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerWithTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
