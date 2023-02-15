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
import { RegisterComponent } from './myCom/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FriendsComponent } from './myCom/friends/friends.component';
import { MemoriesComponent } from './myCom/memories/memories.component';
import { MostrecentComponent } from './myCom/mostrecent/mostrecent.component';
import { MarketplaceComponent } from './myCom/marketplace/marketplace.component';
import { WatchComponent } from './myCom/watch/watch.component';
import { SavedComponent } from './myCom/saved/saved.component';
import { PagesComponent } from './myCom/pages/pages.component';
import { EventComponent } from './myCom/event/event.component';
import { FavoriteComponent } from './myCom/favorite/favorite.component';
import { MessageComponent } from './myCom/message/message.component';
import { NotificationComponent } from './myCom/notification/notification.component';
import { GroupsComponent } from './myCom/groups/groups.component';
import { PostComponent } from './myCom/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TimelineComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    FriendsComponent,
    MemoriesComponent,
    MostrecentComponent,
    MarketplaceComponent,
    WatchComponent,
    SavedComponent,
    PagesComponent,
    EventComponent,
    FavoriteComponent,
    MessageComponent,
    NotificationComponent,
    GroupsComponent,
    PostComponent
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
