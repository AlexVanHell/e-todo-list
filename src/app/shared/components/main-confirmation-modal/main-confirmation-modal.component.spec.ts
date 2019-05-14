import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConfirmationModalComponent } from './main-confirmation-modal.component';

describe('MainConfirmationModalComponent', () => {
  let component: MainConfirmationModalComponent;
  let fixture: ComponentFixture<MainConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
