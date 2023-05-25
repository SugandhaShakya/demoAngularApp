import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted : boolean=false;
  responseFlag={
    sucess:false,
    failure:false
  }

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
  ){}
  
  private buildForm():void{
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.buildForm(); 
  }
  public onLogin(){
    this.submitted=true;
    const formData = this.loginForm.value as User;
    this.authService.postLogin(formData).subscribe({next:(response:any)=>{
      this.authService.setAuthToken(response.token)
      this.responseFlag.failure= false;
      this.responseFlag.sucess = true;
      this.loginForm.reset()
      this.router.navigate(['/home'])
      
    },
    error:(error)=>{
      this.responseFlag.failure=true;
      this.responseFlag.sucess=false;
    }
  })
    
    
  }
}
