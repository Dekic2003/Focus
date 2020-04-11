import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {LandingComponent} from "./auth/landing/landing.component";
import {LogComponent} from "./auth/log/log.component";
import {SignComponent} from "./auth/sign/sign.component";


const routes: Routes = [{
  path: '',
  component: LandingComponent
},
  {
    path: 'auth',
    children: [
      {
        path: 'LogIn',
        component: LogComponent
      },
      {
        path: 'SignIn',
        component: SignComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
