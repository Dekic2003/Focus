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
    NavbarloggedComponent
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
