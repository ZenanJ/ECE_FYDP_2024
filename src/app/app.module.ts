import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';
import {FormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DividerModule } from "primeng/divider";
import {StyleClassModule} from 'primeng/styleclass';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ScrollTopModule} from 'primeng/scrolltop';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';


import { HttpRequestService } from './services/http-request.service';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { TripPostsComponent } from './components/trip-posts/trip-posts.component';
import { PostAsDriverComponent } from './components/post-as-driver/post-as-driver.component';
import { PostAsPassengerComponent } from './components/post-as-passenger/post-as-passenger.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopbarComponent,
    MyProfileComponent,
    TripPostsComponent,
    PostAsDriverComponent,
    PostAsPassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputMaskModule,
    FormsModule,
    PasswordModule,
    OverlayPanelModule,
    DividerModule,
    StyleClassModule,
    CardModule,
    InputTextModule,
    ScrollTopModule,
    HttpClientModule,
    MessagesModule,
    ToastModule,
    CalendarModule
  ],
  providers: [
    HttpRequestService,
    MessageService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
