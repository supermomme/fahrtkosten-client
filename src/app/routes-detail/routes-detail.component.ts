import { Component, OnInit, ViewChild } from '@angular/core';
import { DirectionsMapDirective } from '../directions-map.directive';

@Component({
  selector: 'app-routes-detail',
  templateUrl: './routes-detail.component.html',
  styleUrls: ['./routes-detail.component.css']
})
export class RoutesDetailComponent implements OnInit {
  @ViewChild(DirectionsMapDirective) directionsMap:DirectionsMapDirective;

  origin:any;
  destination:any = "Flensburg Friesische Str. 61";


  constructor() { }

  ngOnInit() {
    /*navigator.geolocation.getCurrentPosition((position) =>{
      console.log(position.coords.latitude, position.coords.longitude);
      this.origin = {lat:position.coords.latitude, lng:position.coords.longitude};
      console.log(this.origin);
      this.directionsMap.updateDirections()
    });*/
  }

  myGPS() {
    navigator.geolocation.getCurrentPosition((position) =>{
      this.origin = this.directionsMap.origin = {lat:position.coords.latitude, lng:position.coords.longitude};
      this.directionsMap.updateDirections()
    });
  }

}
