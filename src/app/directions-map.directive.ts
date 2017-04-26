import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive,  Input} from '@angular/core';
declare var google: any;



@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin;
  @Input() destination;
  private directionsDisplay:any;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnInit(){
    this.updateDirections();
  }

  updateDirections() {
    if(this.origin != undefined && this.destination != undefined) {
      console.log(this.origin, this.destination)
      this.gmapsApi.getNativeMap().then(map => {
        var directionsService = new google.maps.DirectionsService;
        if(this.directionsDisplay == undefined) this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsDisplay.setMap(map);
        directionsService.route({
          origin: this.origin,
          destination: this.destination,
          waypoints: [],
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, (response, status)=>{
          if (status === 'OK') {
            this.directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });

      });
    } else {
      console.log("uhhh no origin or destination")
    }
  }
}
