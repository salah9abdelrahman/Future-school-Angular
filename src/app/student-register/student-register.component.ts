import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  constructor(private _http: HttpClient, private _formBuilder: FormBuilder,private _AdminService:AdminService) { }

  ngOnInit() {
    this.create();
  }
  
  



  studentRegister: FormGroup;
  create() {
    this.studentRegister = this._formBuilder.group({
      StudentSNN: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      FName: ['', [Validators.required, Validators.pattern("^[A-Za-z\s]+$")]],
      LName: ['', [Validators.required, Validators.pattern("^[A-Za-z\s]+$")]],
      Email: ['', [Validators.required, Validators.email]],//Validators.email
      Password: ['', [Validators.required, Validators.minLength(5)]],
      Gender: ['', Validators.required,],
      Age: ['', Validators.required],
      City: ['', Validators.required],
      Street: ['', Validators.required],
      Phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],// Validators.pattern("^\d([- ]*\d){6,13}$") 
      ClassName: ['', Validators.required],
      LevelName: ['', Validators.required],
      ParentFName: ['', [Validators.required, Validators.pattern("^[A-Za-z\s]+$")]],
      ParentLName: ['', [Validators.required, Validators.pattern("^[A-Za-z\s]+$")]],
      ParentSNN: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
    })
  }



  AddStudent(student: Student) {
    return this._http.post(`${environment.url}/Student/Post`, student)
  }



  registerStudent() {
    if (this.studentRegister.valid) {
      console.log(JSON.stringify(this.studentRegister.value));
      let student = new Student();
      student.StudentSNN = this.studentRegister.controls['StudentSNN'].value;
      student.FName = this.studentRegister.controls['FName'].value;
      student.LName = this.studentRegister.controls['LName'].value;
      student.Age = this.studentRegister.controls['Age'].value;
      student.Email = this.studentRegister.controls['Email'].value;
      student.Password = this.studentRegister.controls['Password'].value;
      student.Phone = this.studentRegister.controls['Phone'].value;
      student.Gender = this.studentRegister.controls['Gender'].value;
      student.City = this.studentRegister.controls['City'].value;
      student.Street = this.studentRegister.controls['Street'].value;
      student.ClassName = this.studentRegister.controls['ClassName'].value;
      student.LevelName = this.studentRegister.controls['LevelName'].value;
      student.ParentFName = this.studentRegister.controls['ParentFName'].value;
      student.ParentLName = this.studentRegister.controls['ParentLName'].value;
      student.ParentSNN = this.studentRegister.controls['ParentSNN'].value;

      this.AddStudent(student).subscribe(
        response => (alert("ok")),
        error => (alert("cannot add"))
      )
    }
  }

}







