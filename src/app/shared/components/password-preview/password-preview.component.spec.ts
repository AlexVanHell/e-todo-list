import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPreviewComponent } from './password-preview.component';

describe('PasswordPreviewComponent', () => {
  let component: PasswordPreviewComponent;
  let fixture: ComponentFixture<PasswordPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
