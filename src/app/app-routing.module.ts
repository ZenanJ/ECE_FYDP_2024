import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { TripPostsComponent } from './components/trip-posts/trip-posts.component';
import { PostAsDriverComponent } from './components/post-as-driver/post-as-driver.component';
import { PostAsPassengerComponent } from './components/post-as-passenger/post-as-passenger.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: MyProfileComponent, canActivate: [AuthGuard] },
  {path: 'trip/posts', component: TripPostsComponent,  canActivate: [AuthGuard] },
  {path: 'create/driver', component: PostAsDriverComponent,  canActivate: [AuthGuard] },
  {path: 'create/passenger', component: PostAsPassengerComponent,  canActivate: [AuthGuard] },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
