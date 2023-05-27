import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../constant/AppConstant';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL='/users';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly ISADMIN_KEY = 'is_admin_token';
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(
    private http:HttpClient,
    private router:Router) { 
      this.checkLoginStatus();

    }

  public postRegister(data:any){
    const api = `${AppConstant.SERVER_URL}${this.URL}`
    return this.http.post(api,data)
  }

  public postLogin(data:any){
    const api = `${AppConstant.SERVER_URL}${this.URL}/login`;
    
    return this.http.post(api,data)
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  setAuthToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.loggedInSubject.next(true);

  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    
    return !!this.getAuthToken();
  }
  checkLoginStatus(): void {
    const authToken = this.getAuthToken();
    if (authToken) {
      this.loggedInSubject.next(true);
    }else{
      this.loggedInSubject.next(false);

    }
  }
  isAdmin(){
    return localStorage.getItem(this.ISADMIN_KEY) === 'true';
  }

  setIsAdmin(isAdmin:boolean){
    localStorage.setItem(this.ISADMIN_KEY, isAdmin.toString());
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ISADMIN_KEY);
    this.loggedInSubject.next(false);
    this.router.navigate(['login']);

  }

}

