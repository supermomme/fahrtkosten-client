import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email:String;
  private password:String;

  constructor(private apiService: ApiService,
              private router: Router,
              private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.apiService.app.authenticate()
    .then(res=>this.router.navigate(['routes']))
    .catch(()=>{});
  }

  onSubmit() {
    this.apiService.app.authenticate({
      'strategy': 'local',
      'email': this.email,
      'password': this.password
    }).then((result)=>{
      this.router.navigate(['routes']);
    }).catch((err)=>{
      console.log(err)
      this.toastrService.error('','Login Falsch')
  });
  }

}
