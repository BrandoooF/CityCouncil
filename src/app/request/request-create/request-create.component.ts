import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RequestService } from '../../request.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { NEIGHBORHOOD_MAP_URL } from '../../../environments/environment';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.scss']
})
export class RequestCreateComponent implements OnInit {
  requestForm: FormGroup
  validation_errors = []
  errors = []
  public Editor = ClassicEditor
  NEIGHBORHOOD_MAP_URL = NEIGHBORHOOD_MAP_URL

  //options
  neighborhoods
  categories

  constructor(private fb: FormBuilder, private requestService: RequestService) { }

  ngOnInit() {
    this.initForm()
    this.getCategories()
    this.getNeighborhoods()
  }

  getNeighborhoods(){
    this.requestService.getNeighborhoods().subscribe(
      res => this.neighborhoods = res,
      err => console.log(err)
    )
  }

  getCategories(){
    this.requestService.getCategories().subscribe(
      res => this.categories = res,
      err => console.log(err)
    )
  }

  initForm(){
    this.requestForm = this.fb.group({
      name: ['', Validators.required],
      phone : ['', Validators.required],
      email : ['', Validators.required ],
      address : ['', Validators.required ],
      neighborhood : ['', Validators.required ],
      category: ['', Validators.required],
      request : ['', Validators.required],
    })
  }

  submitRequest(){
    let requestData = this.requestForm.value
    console.log(this.requestForm.value)

    console.log('submit')
    this.requestService.submitRequest(requestData).subscribe(
      res => {
        console.log(res)
        if(res['error']){
          console.log('there has been an error')
          if(res['error']['non_field_errors']){
            res['error']['non_field_errors'].forEach(element => {
              this.errors.push(element)
            })
          }else{
            res['error'].forEach(element => {
              this.errors.push(element)
              console.log(element)
            });
          }
        }
      },
      err => {
        console.log(err)
        if(err['error']){
          this.errors = err['error']
          this.errors.push(err['error'])
        }
        
      }
    )
  }

}
