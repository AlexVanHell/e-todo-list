import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleItemBodyComponent } from './collapsible-item-body.component';

describe('CollapsibleItemBodyComponent', () => {
  let component: CollapsibleItemBodyComponent;
  let fixture: ComponentFixture<CollapsibleItemBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleItemBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleItemBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
