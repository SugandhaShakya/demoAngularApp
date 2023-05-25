import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Array<Employee> = new Array<Employee>();
  error!:string;

  constructor(private employeeService : EmployeeService){ }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((response:any)=>{
      this.employees= response;
    }, error=>{ 
      console.error(error);
      this.error='Could not load employee';
      
    }
    );
  }
}






