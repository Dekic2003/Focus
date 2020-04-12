import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppstackComponent } from './appstack/appstack.component';
import { NavigacijaComponent } from './auth/navigacija/navigacija.component';
import { LandingComponent } from './auth/landing/landing.component';
import { LogComponent } from './auth/log/log.component';
import { SignComponent } from './auth/sign/sign.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LandComponent } from './land/land.component';
import { LandingloggedComponent } from './appstack/landinglogged/landinglogged.component';
import { AddHWComponent } from './appstack/add-hw/add-hw.component';
import { HWComponent } from './appstack/hw/hw.component';
import { NavbarloggedComponent } from './appstack/navbarlogged/navbarlogged.component';
import { PredmetiComponent } from './appstack/predmeti/predmeti.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OcjeneComponent } from './appstack/ocjene/ocjene.component';
import { PredmetiuceniciComponent } from './appstack/predmetiucenici/predmetiucenici.component';
import { OcjeneuceniciComponent } from './appstack/ocjeneucenici/ocjeneucenici.component';
import { ZadacauceniciComponent } from './appstack/zadacaucenici/zadacaucenici.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AppstackComponent,
    NavigacijaComponent,
    LandingComponent,
    LogComponent,
    SignComponent,
    LandComponent,
    LandingloggedComponent,
    AddHWComponent,
    HWComponent,
    NavbarloggedComponent,
    PredmetiComponent,
    SidenavComponent,
    OcjeneComponent,
    PredmetiuceniciComponent,
    OcjeneuceniciComponent,
    ZadacauceniciComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
