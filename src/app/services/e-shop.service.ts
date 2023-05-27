import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstant } from '../constant/AppConstant';


@Injectable({
  providedIn: 'root'
})
export class EShopService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<any>{
    const api=`${AppConstant.SERVER_URL}/category`;
    return this.http.get<any>(api)
  }
}
