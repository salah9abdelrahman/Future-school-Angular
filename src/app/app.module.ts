import { AdminTeacherEditComponent } from './admin-teacher-edit/admin-teacher-edit.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { TaskService } from './task/task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { MaxLengthPipe } from './max-length.pipe';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';
import { DisplaystaffComponent } from './displaystaff/displaystaff.component';
import { AdminComponent } from './admin/admin.component';
import { StaffevaluateComponent } from './staffevaluate/staffevaluate.component';
import { ParentpageComponent } from './parentpage/parentpage.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowdataComponent } from './showdata/showdata.component';
import { ShowlevelComponent } from './showlevel/showlevel.component';
import { ShowcourseComponent } from './showcourse/showcourse.component';
import { ShowclassComponent } from './showclass/showclass.component';
import { ResultComponent } from './result/result.component';
import { AttandanceComponent } from './attandance/attandance.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowattandanceComponent } from './showattandance/showattandance.component';
import { ShowresultComponent } from './showresult/showresult.component';
import { CreateexamComponent } from './createexam/createexam.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { OurcourseComponent } from './ourcourse/ourcourse.component';
import { ShowlevelcourseComponent } from './showlevelcourse/showlevelcourse.component';
import { ShowcoursecourseComponent } from './showcoursecourse/showcoursecourse.component';
import { ShowclasscourseComponent } from './showclasscourse/showclasscourse.component';

@NgModule({
  declarations: [
    AppComponent,TaskComponent, MaxLengthPipe, DisplaystudentComponent,
     DisplaystaffComponent, AdminComponent, StaffevaluateComponent,
      ParentpageComponent, LoginComponent, ShowdataComponent, ShowlevelComponent, 
      ShowcourseComponent, ShowclassComponent, ResultComponent, AttandanceComponent,
       PagenotfoundComponent, ShowattandanceComponent, ShowresultComponent, CreateexamComponent,
       StudentRegisterComponent,AdminUpdateComponent,AdminTeacherEditComponent, HeaderComponent, FooterComponent, SliderComponent, OurcourseComponent, ShowlevelcourseComponent, ShowcoursecourseComponent, ShowclasscourseComponent
       ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
