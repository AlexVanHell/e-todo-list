import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleItemHeaderComponent } from './collapsible-item-header.component';

describe('CollapsibleItemHeaderComponent', () => {
  let component: CollapsibleItemHeaderComponent;
  let fixture: ComponentFixture<CollapsibleItemHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleItemHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
