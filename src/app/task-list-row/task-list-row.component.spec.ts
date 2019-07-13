import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListRowComponent } from './task-list-row.component';

describe('TaskListRowComponent', () => {
  let component: TaskListRowComponent;
  let fixture: ComponentFixture<TaskListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
