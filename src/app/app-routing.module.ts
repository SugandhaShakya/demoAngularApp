import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'about', component: AboutComponent,canActivate:[AuthGuard] },
  { path: 'employees', component: EmployeesComponent, canActivate:[AuthGuard]  },
  { path: 'add-employee', component: EmployeeFormComponent, canActivate:[AuthGuard] },




  { path: '**', redirectTo:'home'},//any route must always be at last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
