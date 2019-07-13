import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinquentTasksComponent } from './delinquent-tasks.component';

describe('DelinquentTasksComponent', () => {
  let component: DelinquentTasksComponent;
  let fixture: ComponentFixture<DelinquentTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelinquentTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinquentTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
