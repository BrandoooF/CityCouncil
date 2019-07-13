import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTasksComponent } from './category-tasks.component';

describe('CategoryTasksComponent', () => {
  let component: CategoryTasksComponent;
  let fixture: ComponentFixture<CategoryTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
