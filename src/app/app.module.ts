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

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

import { HttpRequestService } from './services/http-request.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopbarComponent,
    MyProfileComponent
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
    HttpClientModule
  ],
  providers: [
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
