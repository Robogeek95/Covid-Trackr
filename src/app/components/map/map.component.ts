import { MarkerService } from './../../marker.service';
import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import { ApiDataService } from 'src/app/api-data.service';
import { PopupService } from 'src/app/popup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map;
  private countries;

  @Output() country = new EventEmitter<any>();


  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 18
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
  }

  constructor(private router: Router, private dataService: ApiDataService, private popupService: PopupService) { }

  ngOnInit() {
    this.initMap();

    this.dataService.getCountries()
      .subscribe((data: any) => {
        this.countries = data;

        console.log(this.countries[0])
        this.country.emit(this.countries[0]);

        for (const c of this.countries) {
          const lon = c.countryInfo.lat;
          const lat = c.countryInfo.long;
          L.circle([lon, lat], {
            radius: 20 * (Math.sqrt(c.cases) * 100),
            riseOnHover: true
          }).bindPopup(this.popupService.makePopup(c))
            .addTo(this.map)
            .on('click', () => {
              this.country.emit(c);
            });
        }
      });

  }

  ngAfterViewInit() {
    // console.log(this.map.locate({ setView: true, maxZoom: 16 }));

    // this.map.on('locationfound', () => {
    //   this.country.emit
    // })

  }

}
