import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  tasksByCategory
  neighborhoods
  statusOptions

  constructor(private reqeustService: RequestService, private router: Router) { }

  ngOnInit() {
    this.reqeustService.getRequestsByCategories().subscribe(
      res => {
        this.tasksByCategory = res['response_obj']
        console.log(this.tasksByCategory)
      },
      err => console.log(err)
    )

    this.getNeighborhoods()
    this.getStatusOptions()
  }

  goToCategory(id){
    console.log(id)
    this.router.navigate(['dashboard/category-tasks', id])
  }

  goToStatus(id){
    this.router.navigate(['dashboard/status-tasks', id])
  }

  getStatusOptions(){
    this.reqeustService.getStatusOptions().subscribe(
      res => {
        this.statusOptions = res
        console.log(res)
      },
      err => console.log(err)
    )
  }

  getNeighborhoods(){
    this.reqeustService.getNeighborhoods().subscribe(
      res => {
        this.neighborhoods = res
        console.log(res)
      },
      err => console.log(err)
    )
  }

  goToNeighborhood(id){
    this.router.navigate(['dashboard/neighborhood-tasks', id])
  }

  goToAllTasks(ev){
    ev.preventDefault()
    this.router.navigate(['dashboard/all-tasks'])
  }

  goToDelinquent(){
    this.router.navigate(['dashboard/delinquent-tasks'])
  }

  goToOverview(){
    this.router.navigate(['dashboard/overview'])
  }

  goToHome(){
    this.router.navigate(['dashboard/list/'])
  }

}
