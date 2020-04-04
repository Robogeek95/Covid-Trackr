import { MarkerService } from './../../marker.service';
import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import { ApiDataService } from 'src/app/api-data.service';
import { PopupService } from 'src/app/popup.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import mapboxgl from 'mapbox-gl';

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
    mapboxgl.accessToken = environment.mabox.apiKey;
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    }).on('dataloading', () => {
      window.dispatchEvent(new Event('resize'));
      // mapboxObj.resize(); also work
    });
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
