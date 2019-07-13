import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-tasks',
  templateUrl: './category-tasks.component.html',
  styleUrls: ['./category-tasks.component.scss']
})
export class CategoryTasksComponent implements OnInit {
  tasks = []
  cat_id: any
  category: any

  constructor(
    private requestService: RequestService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      val => {
        this.cat_id = val['id']
        this.reqeustsByCategory(this.cat_id)
      },
      err => console.log(err)
    )
  }

  reqeustsByCategory(id){
    this.requestService.requestsByCategory(id).subscribe(
      res => {
        this.tasks = res['tasks']
        this.category = res['category']
      },
      err => console.log(err)
    )
  }

  goToDetail(id){
    this.router.navigate(['request-detail/', id])
  }

}
