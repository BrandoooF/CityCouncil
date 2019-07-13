import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../environments/environment';
import { Inquiry } from './models/inquiry';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  requests = []

  constructor(private http: HttpClient) { }

  submitRequest(requestData: Inquiry){
    return this.http.post(API_URL + `/api/list/`, requestData)
  }

  getRequests(){
    return this.http.get(API_URL + '/api/list')
  }

  getRequest(id){
    return this.http.get(API_URL + `/api/list/${id}/`)
  }

  searchTasks(queryString){
    return this.http.get(API_URL + `/api/search-tasks/?queryString=${queryString}`)
  }

  getStatusOptions(){
    return this.http.get(API_URL + `/api/status-list/`)
  }

  getNeighborhoods(){
    return this.http.get(API_URL + '/api/neighborhoods/')
  }

  getRequestsByNeighborhood(id){
    return this.http.get(API_URL + `/api/neighborhood-detail/${id}/`)
  }

  changeStatus(statusId, requestId){
    return this.http.get(API_URL + `/api/change-status/?statusId=${statusId}&requestId=${requestId}`)
  }

  getCategories(){
    return this.http.get(API_URL + '/api/categories/')
  }

  getRequestsByCategories(){
    return this.http.get(API_URL + '/api/tasks-by-categories/')
  }

  requestsByCategory(cat_id){
    return this.http.get(API_URL + `/api/tasks-by-category/${cat_id}/`)
  }

  requestsByStatus(id){
    return this.http.get(API_URL + `/api/tasks-by-status/${id}/`)
  }

  getDelinquentTasks(){
    return this.http.get(API_URL + `/api/delinquent-tasks/`)
  }

  getNeighborhoodCounts(){
    return this.http.get(API_URL + `/api/neighborhood-counts/`)
  }
}
