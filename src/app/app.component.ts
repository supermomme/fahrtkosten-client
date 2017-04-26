import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private apiService: ApiService,
              private router: Router
  ) { }

  logout() {
    this.apiService.app.logout().then(() => {
      this.router.navigate(['login']);
    })
  }

}
