import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks-by-neighborhood',
  templateUrl: './tasks-by-neighborhood.component.html',
  styleUrls: ['./tasks-by-neighborhood.component.scss']
})
export class TasksByNeighborhoodComponent implements OnInit {
  neighborhood: any

  constructor(private requestService: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      val => {
        let id = val['id']
        this.getNeighborhoodTasks(id)
      },
      err => console.log(err)
    )
  }

  getNeighborhoodTasks(id){
    this.requestService.getRequestsByNeighborhood(id).subscribe(
      res => {
        this.neighborhood = res
        console.log(res)     
      },
      err => console.log(err)
    )
  }

}
