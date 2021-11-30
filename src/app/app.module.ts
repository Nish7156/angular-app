import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './server/edit-server/edit-server.component';
import { SliderComponent } from './slider/slider.component';
import { WorkComponent } from './work/work.component';
import { ToggleComponent } from './work/toggle/toggle.component';
import { TabsComponent } from './work/tabs/tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './contact/register/register.component';
import { LoginComponent } from './contact/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutSecComponent } from './work/about-sec/about-sec.component';
import { AuthComponent } from './contact/auth/auth.component';
import { MiddleContentComponent } from './work/middle-content/middle-content.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent,
    SliderComponent,
    WorkComponent,
    ToggleComponent,
    TabsComponent,
    RegisterComponent,
    LoginComponent,
    AboutSecComponent,
    AuthComponent,
    MiddleContentComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
