import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './myCom/home/home.component';
import { LoginComponent } from './myCom/login/login.component';
import { ProfileComponent } from './myCom/profile/profile.component';
import { TimelineComponent } from './myCom/timeline/timeline.component';

const routes: Routes = [
  // {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'timeline', component: TimelineComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
