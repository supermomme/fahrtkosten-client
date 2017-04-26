import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../routes.service';
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {

  private routes:any;
  private isAuthed:boolean = false;

  constructor(
    private routesService:RoutesService,
    private router: Router,
    private authGuard:AuthGuardService
  ) { }

  ngOnInit() {
    this.routesService.service.find()
    .then(res=>res.data)
    .then(res=>this.routes = res)
    .then(()=>console.log(this.routes))
    this.authGuard.canActivate(true)
    .then(res=>this.isAuthed = res)
  }

  detailClick(route) {this.router.navigate(['routes', route._id])}
  editClick(route) {this.router.navigate(['routes', route._id, 'edit'])}

}
