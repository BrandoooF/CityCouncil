import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../request.service';


@Component({
  selector: 'app-tasks-by-status',
  templateUrl: './tasks-by-status.component.html',
  styleUrls: ['./tasks-by-status.component.scss']
})
export class TasksByStatusComponent implements OnInit {
  status_id: any
  status
  tasks = []

  constructor(
    private router: Router,
    private route: ActivatedRoute, private requestService: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(
      val => {
        this.status_id = val['id']
        this.getStatus(this.status_id)
      },
      err => console.log(err)
    )
  }

  getStatus(id){
    return this.requestService.requestsByStatus(id).subscribe(
      res => {
        this.status = res['status']
        this.tasks = res['tasks']
      },
      err => console.log(err)
    )
  }

  goToDetail(id){
    this.router.navigate(['request-detail/', id])
  }

}
