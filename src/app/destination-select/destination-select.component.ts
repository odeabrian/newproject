import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-destination-select',
  templateUrl: './destination-select.component.html',
  styleUrls: ['./destination-select.component.scss']
})
export class DestinationSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let map: google.maps.Map, infoWindow: google.maps.InfoWindow;

    function initMap(): void {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6,
      });
      infoWindow = new google.maps.InfoWindow();

      const locationButton = document.createElement("button");

      locationButton.textContent = "Pan to Current Location";
      locationButton.classList.add("custom-map-control-button");

      map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

      locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent("Location found.");
              infoWindow.open(map);
              map.setCenter(pos);
            },
            () => {
              handleLocationError(true, infoWindow, map.getCenter()!);
            }
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter()!);
        }
      });
    }

    function handleLocationError(
      browserHasGeolocation: boolean,
      infoWindow: google.maps.InfoWindow,
      pos: google.maps.LatLng
    ) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    }

    // Get map API from Google
    const loader = new Loader({
      apiKey: "",
      version: "weekly"
    });

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      })
      
      initMap()

    })
    
  }

}
