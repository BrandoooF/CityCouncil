import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail(id){
    this.router.navigate(['dashboard/request-detail', id])
  }

}
