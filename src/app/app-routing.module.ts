import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './contact/login/login.component';
import { RegisterComponent } from './contact/register/register.component';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './server/edit-server/edit-server.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const AppRoutes : Routes = [
  {path : '', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'users', component : UsersComponent},
  {path : 'users/:id/:name', component : UserComponent},
  {path : 'user', component : UserComponent},
  {path : 'user/:id/:name', component : UserComponent},
  {path : 'server', component : ServerComponent},
  {path : 'server/:id/edit', component : EditServerComponent},
  {path :'register' , component: RegisterComponent},
  
] 

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
