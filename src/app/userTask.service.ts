import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  private baseUrl = 'https://calm-headland-79271.herokuapp.com/usertasks-crud-rest/userTasks';

  constructor(private http: HttpClient) { }

  getUserTaskList(): Observable<any> {

    return this.http.get(`${this.baseUrl}/`);
  }
}