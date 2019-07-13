import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delinquent-tasks',
  templateUrl: './delinquent-tasks.component.html',
  styleUrls: ['./delinquent-tasks.component.scss']
})
export class DelinquentTasksComponent implements OnInit {
  tasks = []

  constructor(private router: Router, private requestService: RequestService) { }

  ngOnInit() {
    this.getTasks()
  }

  getTasks(){
    this.requestService.getDelinquentTasks().subscribe(
      res => this.tasks = res['tasks'],
      err => console.log(err)
    )
  }

  goToDetail(id){
    this.router.navigate(['request-detail/', id])
  }

}
