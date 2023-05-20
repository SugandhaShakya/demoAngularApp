import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';

import { AppConstant } from '../constant/AppConstant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // URL ='api/v1'
  constructor(private http:HttpClient) { }
  public getAll():Observable<any>{
    const api = `${AppConstant.SERVER_URL}/employee`
    return this.http.get<any>(api)
  }
}


// URL = 'api/v1/employees';


//   constructor(private http: HttpClient) { }

//   public getAll(): Observable<any>{
//     const api= `${AppConstant.SERVER_URL}${this.URL}`
//     return this.http.get<any>(`${api}`);
//   }