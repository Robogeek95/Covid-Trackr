import { MarkerService } from './../../marker.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { ApiDataService } from 'src/app/api-data.service';
import { PopupService } from 'src/app/popup.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map;
  private apiData;


  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

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

  constructor(private markerService: MarkerService, private dataService: ApiDataService, private popupService: PopupService) { }

  ngOnInit() {
    this.initMap();

    this.dataService.getCountries()
      .subscribe((data: any) => {
        this.apiData = data;
        console.log(this.apiData)

        const maxCase = Math.max(...data.map(c => c.cases), 0);
        console.log(maxCase);
        for (const c of this.apiData) {
          console.log(20 * (Math.sqrt(c.cases) * 100))
          const lon = c.countryInfo.lat;
          const lat = c.countryInfo.long;
          const circle = L.circle([lon, lat], {
            radius: 20 * (Math.sqrt(c.cases) * 100),
            riseOnHover: true
          });

          circle.bindPopup(this.popupService.makePopup(c))
          
          circle.addTo(this.map);
        }
      })
  }

  ngAfterViewInit() {
  }

}
