import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemDetailComponent } from './todo-item-detail.component';

describe('TodoItemDetailComponent', () => {
  let component: TodoItemDetailComponent;
  let fixture: ComponentFixture<TodoItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
