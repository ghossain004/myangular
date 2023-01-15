import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './myCom/login/login.component';
import { HomeComponent } from './myCom/home/home.component';
import { TimelineComponent } from './myCom/timeline/timeline.component';
import { ProfileComponent } from './myCom/profile/profile.component';
import { HeaderComponent } from './myCom/header/header.component';
import { FooterComponent } from './myCom/footer/footer.component';
import { RegisterComponent } from './myCom/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TimelineComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
