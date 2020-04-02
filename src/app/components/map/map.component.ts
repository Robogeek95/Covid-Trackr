import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map

  private initMap(): void {
    // this.map = L.map('map', {
    //   center: [39.8282, -98.5795],
    //   zoom: 3
    // });

    this.map = L.map('map').fitWorld();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 200
    }).addTo(this.map);

    L.marker({ lon: 30, lat: 50 }).addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

    this.map.locate({ setView: true, maxZoom: 16 });
  }

  constructor() { }

  ngOnInit() { 
    this.initMap();
  }

  ngAfterViewInit() {
  }

}
