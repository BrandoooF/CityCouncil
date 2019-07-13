import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksByNeighborhoodComponent } from './tasks-by-neighborhood.component';

describe('TasksByNeighborhoodComponent', () => {
  let component: TasksByNeighborhoodComponent;
  let fixture: ComponentFixture<TasksByNeighborhoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksByNeighborhoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksByNeighborhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
