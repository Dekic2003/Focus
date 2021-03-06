import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {LandingComponent} from "./auth/landing/landing.component";
import {LogComponent} from "./auth/log/log.component";
import {SignComponent} from "./auth/sign/sign.component";
import {LandingloggedComponent} from "./appstack/landinglogged/landinglogged.component";
import { HWComponent} from "./appstack/hw/hw.component";
import { PredmetiComponent} from "./appstack/predmeti/predmeti.component";
import {OcjeneComponent} from "./appstack/ocjene/ocjene.component";
import { ZadacauceniciComponent} from "./appstack/zadacaucenici/zadacaucenici.component";
import {PredmetiuceniciComponent} from "./appstack/predmetiucenici/predmetiucenici.component";
import {OcjeneuceniciComponent} from "./appstack/ocjeneucenici/ocjeneucenici.component";

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
  },
  {
    path: 'app',
    children: [

      {
        path: 'ControlPanel',
        component: LandingloggedComponent
      },{
        path:'prof',
        children:[

          {
            path: 'Zadaca',
            component: HWComponent
          },
          {
            path: 'Predmeti',
            component: PredmetiComponent
          },
          {
            path: 'Ocjene',
            component: OcjeneComponent
          },
        ]
      },
      {
        path:'ucenici',
        children:[

          {
            path: 'Zadaca',
            component: ZadacauceniciComponent
          },
          {
            path: 'Predmeti',
            component: PredmetiuceniciComponent
          },
          {
            path: 'Ocjene',
            component: OcjeneuceniciComponent
          },
        ]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
