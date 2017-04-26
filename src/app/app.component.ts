import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private isAuthed:boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authGuard:AuthGuardService
  ) { }

  ngOnInit() {
    this.authGuard.canActivate(true)
    .then(res=>this.isAuthed = res)
  }

  logout() {
    this.apiService.app.logout().then(() => {
      this.router.navigate(['login']);
    })
  }
  login() {
    this.router.navigate(['login']);
  }

}
