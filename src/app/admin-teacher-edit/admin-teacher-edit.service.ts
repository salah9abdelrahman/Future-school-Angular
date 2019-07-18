import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Teacher } from '../models/teacher.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class AdminTeacherEditService {

  constructor(private _http: HttpClient, private _formBuilder:FormBuilder) { }

   teacher:Teacher;
  courses: Course[] = [];
   getTeacher(ssn:string){
     this._http.get(`${environment.url}/Teacher/Get/${ssn}`).subscribe(
       response => (this.teacher = response as Teacher, console.log(this.teacher)),
       error => alert("Not Existed")
     )
   }

  getCourses() {

    this._http.get(`${environment.url}/Course/Get`).subscribe(
      response => this.courses = response as Course[],
      error => alert("cannot get"))
  }

   updateTeacher(teacher:Teacher)
   {


   }

  teacherUpdate: FormGroup;
  create() {
    this.teacherUpdate = this._formBuilder.group({
      ssn: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      FName: ['', [Validators.required, Validators.pattern("^[A-Za-z\s]+$")]],
      LName: ['', [Validators.required, Validators.pattern("^[A-Za-z\s]+$")]],
      Email: ['', [Validators.required, Validators.email]],//Validators.email
      Password: ['', [Validators.required, Validators.minLength(5)]],
      Gender: ['', Validators.required,],
      Age: ['', Validators.required],
      City: ['', Validators.required],
      Street: ['', Validators.required],
      Phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],// Validators.pattern("^\d([- ]*\d){6,13}$") 
      CourseName: ['', Validators.required],
    })
  }

  register() {
    if (this.teacherUpdate.valid) {
      console.log(JSON.stringify(this.teacherUpdate.value));
      let teacher = new Teacher();
      teacher.TeacherSNN = this.teacherUpdate.controls['ssn'].value;
      teacher.Age = this.teacherUpdate.controls['Age'].value;
      teacher.City = this.teacherUpdate.controls['City'].value;
      teacher.CourseName = this.teacherUpdate.controls['CourseName'].value;
      teacher.Email = this.teacherUpdate.controls['Email'].value;
      teacher.FName = this.teacherUpdate.controls['FName'].value;
      teacher.Gender = this.teacherUpdate.controls['Gender'].value;
      teacher.LName = this.teacherUpdate.controls['LName'].value;
      teacher.Password = this.teacherUpdate.controls['Password'].value;
      teacher.Phone = this.teacherUpdate.controls['Phone'].value;
      teacher.Street = this.teacherUpdate.controls['Street'].value;
      this.AddTeacher(teacher).subscribe(
        response => (alert("ok")),
        error => (alert("cannot add"))

      )
    }
  }
  AddTeacher(teacher: Teacher) {
    return this._http.post(`${environment.url}/Teacher/Post`, teacher)
  }

}
