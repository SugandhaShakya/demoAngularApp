import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  submitted : boolean = false; 
  formData !:User|JSON; 
  responseFlag={
  sucess:false,
  failure:false
  };
  constructor(private formBuilder:FormBuilder,private authService:AuthService ){}
  private buildForm(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      city: ['', Validators.required],
    });
  }

  ngOnInit(): void {
     this.buildForm();
  }

  public onRegister(){
    this.submitted = true;
    const formData= this.registerForm.value as User;
    this.authService.postRegister(formData).subscribe({next:()=>{
      this.responseFlag.failure= false;
      this.responseFlag.sucess= true;
      this.registerForm.reset()
    },
    error: error=>{
      console.log(error);
      this.responseFlag.failure=true;
      this.responseFlag.sucess=false;
  }
})
    console.log(this.formData);

    if(this.registerForm.invalid){
      return 
    }
  }
}
