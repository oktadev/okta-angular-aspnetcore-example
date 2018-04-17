import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

import { AppComponent } from './app.component';
import { GridJoggingComponent } from './grid-jogging/grid-jogging.component';
import { AddOrUpdateJoggingComponent } from './add-or-update-jogging/add-or-update-jogging.component';

import { WorkoutService } from './workout.service';

import {
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';
import * as _ from 'lodash';
import { HomeComponent } from './home/home.component';



const config = {
  issuer: 'https://dev-611348.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oaedm79ibBbgsefU0h7',
  scope: 'openid profile email'
};

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GridJoggingComponent,
    AddOrUpdateJoggingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(config),
    FormsModule,
  ],
  providers: [WorkoutService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
