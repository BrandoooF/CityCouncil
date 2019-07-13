import { Component, OnInit, EventEmitter } from '@angular/core';
import { RequestService } from '../../request.service';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-request-actions',
  templateUrl: './request-actions.component.html',
  styleUrls: ['./request-actions.component.scss']
})
export class RequestActionsComponent implements OnInit {
  statusOptions
  @Input() requestId
  @Output() statusChange = new EventEmitter()

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getStatusOptions()
  }

  getStatusOptions(){
    this.requestService.getStatusOptions().subscribe(
      res => this.statusOptions = res,
      err => console.log(err)
    )
  }

  changeStatus(statusId){
    console.log(statusId)
    console.log(this.requestId)
    this.requestService.changeStatus(statusId, this.requestId).subscribe(
      res => {
        console.log(res)
        this.statusChange.emit(res['task']['status'])
      },
      err => console.log(err)
    )
  }

}
