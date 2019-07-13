import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-row',
  templateUrl: './task-list-row.component.html',
  styleUrls: ['./task-list-row.component.scss']
})
export class TaskListRowComponent implements OnInit {
  @Input() tasks

  constructor() { }

  ngOnInit() {
    console.log(this.tasks)
  }

}
