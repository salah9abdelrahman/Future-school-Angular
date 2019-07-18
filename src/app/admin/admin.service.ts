import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, EmailValidator, FormControl  } from '@angular/forms';
import { Level } from '../models/level.model';
import { Course } from '../models/course.model';
import { ClassRoom } from '../models/classroom.model';
import { Student } from '../models/student.model';
import { Teacher } from '../models/teacher.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  

  constructor(private _http:HttpClient,private _formBuilder:FormBuilder) { }
  levels: Level[] = [];
  courses: Course[] = [];
  classrooms: ClassRoom[] = [];
  students: Student[] = [];
  teachers: Teacher[] = [];


  
  x:ClassRoom[]=[];
  GetClassByLevel(levelname:string)
  {
       this.x= this.classrooms.filter(ww=>ww.LevelName==levelname);
  }

  getLevels(){
     this._http.get(`${environment.url}/Level/Get`).subscribe(
      response=>this.levels=response as Level[],
      error=>alert("cannot get")
    )
  }

  getCourses(){

    this._http.get(`${environment.url}/Course/Get`).subscribe(
      response => this.courses = response as Course[],
      error => alert("cannot get"))
  }

  getCLassRooms() {

    this._http.get(`${environment.url}/ClassRoom/Get`).subscribe(
      response => this.classrooms = response as ClassRoom[],
      error => alert("cannot get"))
  }

  getAllStudents(){
    this._http.get(`${environment.url}/Students/Get`).subscribe(
      response => this.students = response as Student[],
      error => alert("cannot get"))

  }



  



  



  AddLevel(level: Level) {
    return this._http.post(`${environment.url}/Level/Post`, level)
  }
  CreateLevel(levelName: string) {

    var check=this.levels.some(Ww=>Ww.Name==levelName);
    if(check==false){
      var level = new Level();
      level.Name = levelName
      this.AddLevel(level).subscribe(
        response => {
          let id = response as number;
          level.LevelId = id;
          this.levels.push(level);
          alert("added successfully")
        },
        error => {
          console.log("can't create")
        }
      )

    }
    else alert("already Existed")


    
  }



  AddClassRoom(classRoom: ClassRoom) {
    return this._http.post(`${environment.url}/ClassRoom/Post`, classRoom)
  }

  CreateClass(className: string, levelName: string) {

    var check=this.classrooms.some(ww=>ww.Name==className);
    if(check==false){

      let classroom = new ClassRoom();
      classroom.Name = className;
      classroom.LevelName = levelName;
      this.AddClassRoom(classroom).subscribe(
        response => (
          classroom.ClassId = response as number,
          this.classrooms.push(classroom),
          alert("added successfully")
        ),
        error => (
          console.log("can't create")
        )
      )


    }
    else alert("alreadyExisted")
    
  }




  AddCourse(course: Course) {
    return this._http.post(`${environment.url}/Course/Post`, course)
  }




  CreateCourse(courseName: string, levelName: string) {



    var check = this.courses.some(ww => ww.Name == courseName);
    if (check == false) {
    
    let course = new Course();
    course.Name = courseName;
    course.LevelName = levelName;
    this.AddCourse(course).subscribe(
      response => (
        course.CourseId = response as number,
        this.courses.push(course),
        alert("added successfully")
      ),
      error => (
        console.log("can't create"),
        console.log(course)
      )
    )
  }
  else alert("Already Exited")
}



  

  




  


  
  

  


  teacherRegister: FormGroup;
  create(){  
  this.teacherRegister = this._formBuilder.group({
    ssn: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
    FName: ['', [Validators.required, Validators.pattern("^[A-Za-z\s]+$")]],
    LName: ['', [Validators.required, Validators.pattern("^[A-Za-z\s]+$")]],
      Email: ['', [Validators.required,Validators.email]],//Validators.email
      Password: ['',[Validators.required,Validators.minLength(5)]],
      Gender: ['', Validators.required,],
      Age: ['', Validators.required],
      City: ['', Validators.required],
      Street: ['', Validators.required],
    Phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],// Validators.pattern("^\d([- ]*\d){6,13}$") 
      CourseName: ['', Validators.required],
    })}

  register() {
    if (this.teacherRegister.valid) {
      console.log(JSON.stringify(this.teacherRegister.value));
     let teacher = new Teacher();
      teacher.TeacherSNN = this.teacherRegister.controls['ssn'].value;
      teacher.Age = this.teacherRegister.controls['Age'].value;
      teacher.City = this.teacherRegister.controls['City'].value;
      teacher.CourseName = this.teacherRegister.controls['CourseName'].value;
      teacher.Email = this.teacherRegister.controls['Email'].value;
      teacher.FName = this.teacherRegister.controls['FName'].value;
      teacher.Gender = this.teacherRegister.controls['Gender'].value;
      teacher.LName = this.teacherRegister.controls['LName'].value;
      teacher.Password = this.teacherRegister.controls['Password'].value;
      teacher.Phone = this.teacherRegister.controls['Phone'].value;
      teacher.Street = this.teacherRegister.controls['Street'].value;
     this.AddTeacher(teacher).subscribe(
       response=>(alert("ok")),
       error=>(alert("cannot add"))
       
     )
    }
  }
  AddTeacher(teacher: Teacher) {
    return this._http.post(`${environment.url}/Teacher/Post`, teacher)
  }






  //Update And Delete

  oneStudent=new Student();

    getStudentBySSN(ssn:string){
      this._http.get(`${environment.url}/Student/Get/${ssn}`).subscribe(
        response=>this.oneStudent=response as Student,
        error=>alert("Not Existed")
        
        
      )
    }

      

    
    deleteStudent(ssn:string){
      this._http.delete(`${environment.url}/Student/Delete/${ssn}`).subscribe(
        response => (this.oneStudent = response as Student,
          this.students.splice(this.students.findIndex(x => x.StudentSNN == ssn))
          ),
        error=>alert("Not Existed"),
      )

    }

  deleteLevel(name: string) {
    var level=this.levels.find(ww=>ww.Name==name);
    var x=level.LevelId;
    console.log(x);
  
    this._http.delete(`${environment.url}/Level/Delete/${level.LevelId}`).subscribe(
      response => (
        this.levels.splice(this.levels.findIndex(x => x.Name == name),1),
        alert("deleted succsssfully")
      ),
      error => alert("cannot delete"),
    )
  }

  updateLevelName(neww :string,old:string){
    var check=this.levels.some(ww=>ww.Name==neww);
    if(check==false && neww!==""){
      var level = this.levels.find(ww => ww.Name == old);
      level.Name = neww;
      console.log(level.Name)
      console.log(level.LevelId)
      this._http.put(`${environment.url}/Level/Put/${level.LevelId}`, level).subscribe(
        res => alert("updated ok"),
        error => alert("not updated"),

      )

    } if(check==true){
      alert("Existed");
    }
    if(neww==""){
      alert("canot add empty");
    }
  }

  //--------------------------------------------------------------------------------------

  deleteCourse(name: string) {
    var course = this.courses.find(ww => ww.Name == name);

    console.log(course.CourseId);
    console.log(course.Name);
    this._http.delete(`${environment.url}/Course/Delete/${course.CourseId}`).subscribe(
      response => (
        this.courses.splice(this.courses.findIndex(x => x.Name == name), 1),
        alert("deleted succsssfully")
      ),
      error => alert("cannot delete these course"),
    )
  }



  updateCourse(neww: string, old: string) {
    var check = this.courses.some(ww => ww.Name == neww);
    if (check == false && neww !== "") {
      var course = this.courses.find(ww => ww.Name == old);
      course.Name = neww;
      console.log(course.Name)
      console.log(course.CourseId)
      this._http.put(`${environment.url}/Course/Put`, course).subscribe(
        res => alert("updated ok"),
        error => alert("not updated"),

      )

    } if (check == true) {
      alert("Existed");
    }
    if (neww == "") {
      alert("canot add empty");
    }
  }

  //--------------------------------------------------------



  deleteClassRoom(name: string) {
    var classroom = this.classrooms.find(ww => ww.Name == name);

    
    this._http.delete(`${environment.url}/ClassRoom/Delete/${classroom.ClassId}`).subscribe(
      response => (
        this.classrooms.splice(this.classrooms.findIndex(x => x.Name == name), 1),
        alert("deleted succsssfully")
      ),
      error => alert("cannot delete these classRoom"),
    )
  }



  updateClassRoom(neww: string, old: string){
    var check = this.classrooms.some(ww => ww.Name == neww);
    if (check == false && neww !== "") {
      var classroom = this.classrooms.find(ww => ww.Name == old);
      classroom.Name = neww;
      console.log(classroom.Name)
      console.log(classroom.ClassId)
      this._http.put(`${environment.url}/ClassRoom/Put`, classroom).subscribe(
        res => alert("updated ok"),
        error => alert("not updated"),

      )

    } if (check == true) {
      alert("Existed");
    }
    if (neww == "") {
      alert("canot add empty");
    }




  }








    

    oneCourse=new Course();

  getCourseByName(Name: string) {
    this._http.get(`${environment.url}/Course/Get/${Name}`).subscribe(
      response => this.oneStudent = response as Student
    )
  }

  
    

   
}
