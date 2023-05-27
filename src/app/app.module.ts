import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app/app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { AboutDetailComponent } from './component/about/about-detail/about-detail.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CategoryComponent } from './component/category/category.component';  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    AboutDetailComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
