import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  formData!:JSON;

  constructor(private formBuilder: FormBuilder) {}

  // form builder
  private buildForm(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      salary: [''],
      age: [''],
      image: [''],
    });
  }

  // basic reactive form

  // employeeForm = new FormGroup({
  //   name : new FormControl(''),
  //   salary : new FormControl(''),
  //   age : new FormControl(''),
  //   image : new FormControl(''),

  // })

  ngOnInit(): void {
    this.buildForm();
  }

  public submit() {
    this.formData= this.employeeForm.value;
    console.log(this.formData);

  }
}
