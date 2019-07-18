import { ShowlevelcourseComponent } from './showlevelcourse/showlevelcourse.component';
import { OurcourseComponent } from './ourcourse/ourcourse.component';
import { SliderComponent } from './slider/slider.component';
import { StaffevaluateComponent } from './staffevaluate/staffevaluate.component';
import { AttandanceComponent } from './attandance/attandance.component';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';
import { DisplaystaffComponent } from './displaystaff/displaystaff.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowdataComponent } from './showdata/showdata.component';
import { ShowlevelComponent } from './showlevel/showlevel.component';
import { ShowcourseComponent } from './showcourse/showcourse.component';
import { ShowclassComponent } from './showclass/showclass.component';
import { ResultComponent } from './result/result.component';
import { ParentpageComponent } from './parentpage/parentpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowresultComponent } from './showresult/showresult.component';
import { ShowattandanceComponent } from './showattandance/showattandance.component';
import { CreateexamComponent } from './createexam/createexam.component';
import { ShowcoursecourseComponent } from './showcoursecourse/showcoursecourse.component';
import { ShowclasscourseComponent } from './showclasscourse/showclasscourse.component';

const routes: Routes = [
  {path:'',component:TaskComponent},
  {path:'login',component:LoginComponent},
  {path:'dataentery',component:AdminComponent},
  {path:'student',component:DisplaystudentComponent},
  {path:'staff',component:DisplaystaffComponent},
  {path:'showdata',component:ShowdataComponent},
  {path:'showlevel',component:ShowlevelComponent},
  {path:'showcourse',component:ShowcourseComponent},
  {path:'showclass',component:ShowclassComponent},
  {path:'showstudent',component:DisplaystudentComponent},
  {path:'showstaff',component:DisplaystaffComponent},
  {path:'addresult',component:ResultComponent},
  {path:'takeattandance',component:AttandanceComponent},
  {path:'staffevaluate',component:StaffevaluateComponent},
  {path:'createexam', component:CreateexamComponent},
  {path:'parent',component:ParentpageComponent},
  {path:'showresult',component:ShowresultComponent},
  {path:'admin', component:AdminComponent},
  {path:'showattandance',component:ShowattandanceComponent},
  {path:'slider',component:SliderComponent},
{path:'ourcourses',component:OurcourseComponent},
{path:'coursehome',component:ShowcoursecourseComponent},
{path:'levelhome',component:ShowlevelcourseComponent},
{path:'classhome',component:ShowclasscourseComponent},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
