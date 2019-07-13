import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../request.service';
import { Inquiry } from '../../models/inquiry';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {
  request

  constructor(private route: ActivatedRoute, private requestService: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(
      val => {
        console.log(val['id'])
        this.getRequest(val['id'])
      },
      err => console.log(err)
    )
  }

  getRequest(id){
    this.requestService.getRequest(id).subscribe(
      res => {
        this.request = res
      },
      err => console.log(err)
    )
  }

  handleStatusChange(status){
    this.request.status = status
  }

}
