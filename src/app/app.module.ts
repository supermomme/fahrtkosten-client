import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { DirectionsMapDirective } from './directions-map.directive';

import { ApiService } from './api.service';
import { AuthGuardService } from './auth-guard.service';
import { RoutesService } from './routes.service';

import { AppComponent } from './app.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { RoutesEditComponent } from './routes-edit/routes-edit.component';
import { RoutesDetailComponent } from './routes-detail/routes-detail.component';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'routes', component: RoutesListComponent },
  { path: 'routes/:id', component: RoutesDetailComponent },
  { path: 'routes/:id/edit', component: RoutesEditComponent, canActivate: [AuthGuardService] },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DirectionsMapDirective,
    RoutesListComponent,
    RoutesEditComponent,
    RoutesDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtW65O_hvHP4QF0KfEj-Eks5qQf3EniCo'
    }),
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    AuthGuardService,
    RoutesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
