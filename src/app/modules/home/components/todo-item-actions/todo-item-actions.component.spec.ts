import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemActionsComponent } from './todo-item-actions.component';

describe('TodoItemActionsComponent', () => {
  let component: TodoItemActionsComponent;
  let fixture: ComponentFixture<TodoItemActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
