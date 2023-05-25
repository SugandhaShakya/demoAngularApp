import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../constant/AppConstant';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL='/users';
  private readonly TOKEN_KEY = 'auth_token';

  constructor(
    private http:HttpClient,
    private router:Router) { }

  public postRegister(data:any){
    const api = `${AppConstant.SERVER_URL}${this.URL}`
    return this.http.post(api,data)
  }

  public postLogin(data:any){
    const api = `${AppConstant.SERVER_URL}${this.URL}/login`;
    
    return this.http.post(api,data)
  }
  setAuthToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    console.log(this.getAuthToken());
    
    return !!this.getAuthToken();
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['login'])
  }

}

