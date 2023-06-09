import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './myCom/event/event.component';
import { FavoriteComponent } from './myCom/favorite/favorite.component';
import { FriendsComponent } from './myCom/friends/friends.component';
import { GroupsComponent } from './myCom/groups/groups.component';
import { HomeComponent } from './myCom/home/home.component';
import { LoginComponent } from './myCom/login/login.component';
import { MarketplaceComponent } from './myCom/marketplace/marketplace.component';
import { MemoriesComponent } from './myCom/memories/memories.component';
import { MessageComponent } from './myCom/message/message.component';
import { MostrecentComponent } from './myCom/mostrecent/mostrecent.component';
import { NotificationComponent } from './myCom/notification/notification.component';
import { PagesComponent } from './myCom/pages/pages.component';
import { ProfileComponent } from './myCom/profile/profile.component';
import { RegisterComponent } from './myCom/signup/signup.component';
import { SavedComponent } from './myCom/saved/saved.component';
import { TimelineComponent } from './myCom/timeline/timeline.component';
import { WatchComponent } from './myCom/watch/watch.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'memories', component: MemoriesComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'mostrecent', component: MostrecentComponent},
  {path: 'marketplace', component: MarketplaceComponent},
  {path: 'watch', component: WatchComponent},
  {path: 'saved', component: SavedComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'events', component: EventComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'message', component: MessageComponent},
  {path: 'notification', component: NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
