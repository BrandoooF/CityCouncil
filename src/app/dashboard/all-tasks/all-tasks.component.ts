import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RequestService } from '../../request.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef
  tasks: any
  queryString = ''

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.getRequests().subscribe(
      res => {
        this.tasks = res
        console.log(res)
      },
      err => console.log(err)
    )

    this.focusInput()
  }

  focusInput(){
    this.searchInput.nativeElement.focus()
  }

  search(queryString=this.queryString){
    this.requestService.searchTasks(queryString).subscribe(
      res => {
        console.log(res)
        this.tasks = res['tasks']
      },
      err => console.log(err)
    )
  }

}
