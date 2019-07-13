import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  requests: any
  requestsByCategories: any
  statusOptions: any
  neighborhoodCounts: any

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit() {
    this.getStatusOptions()
    this.loadRequests()
    this.loadRequestsByCategories()
    this.getNeighborhoodCounts()
  }

  loadRequests(){
    console.log(this.requests)
    this.requestService.getRequests().subscribe(
      res => this.requests = res,
      err => console.log(err)
    )
  }

  getStatusOptions(){
    this.requestService.getStatusOptions().subscribe(
      res => this.statusOptions = res,
      err => console.log(err)
    )
  }

  getNeighborhoodCounts(){
    this.requestService.getNeighborhoodCounts().subscribe(
      res => {
        this.neighborhoodCounts = res
        console.log(res)
      },
      err => console.log(err)
    )
  }

  goToDetail(id){
    this.router.navigate(['request-detail', id])
  }

  loadRequestsByCategories(){
    this.requestService.getRequestsByCategories().subscribe(
      res => {
        this.requestsByCategories = res['response_obj']
        console.log(res)
      },
      err => console.log(err)
    )
  }

  goToCategory(id){
    console.log(id)
    this.router.navigate(['dashboard/category-tasks', id])
  }

  goToStatus(id){
    this.router.navigate(['dashboard/status-tasks', id])
  }

  goToAllTasks(ev){
    ev.preventDefault()
    this.router.navigate(['dashboard/all-tasks'])
  }

  goToDelinquent(){
    this.router.navigate(['dashboard/delinquent-tasks'])
  }

}
