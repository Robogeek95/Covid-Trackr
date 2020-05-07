import { element } from 'protractor';
import { MarkerService } from './../../marker.service';
import { Component, OnInit, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
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

  @Input() countryId;
  @Output() country = new EventEmitter<any>();


  private initMap(): void {
    mapboxgl.accessToken = environment.mabox.apiKey;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 2
    }).on('dataloading', () => {
      window.dispatchEvent(new Event('resize'));
      // mapboxObj.resize(); also work
    })

    // Add zoom and rotation controls to the map.
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  private customMarker() {
    let element = (c) => {
      let el = document.createElement('div');
      el.style.borderRadius = '50%'
      el.style.height = '20px'
      el.style.width = '20px'
      el.style.backgroundColor = 'red'
      el.style.opacity = '0.4'
      el.addEventListener('click', () => {
        this.country.emit(c);
        this.router.navigate(['/map', c.country])
      })

      return el;
    }
    //

    for (const c of this.countries) {
      const lon = c.countryInfo.lat;
      const lat = c.countryInfo.long;
      var marker = new mapboxgl.Marker(element(c))
        .setLngLat([lat, lon])
        .addTo(this.map);
    }
  }

  constructor(private router: Router, private dataService: ApiDataService, private popupService: PopupService) { }

  ngOnInit() {
    console.log(this.countryId)

    this.initMap()
    this.dataService.getCountries()
      .subscribe((data: any) => {
        this.countries = data;
        this.customMarker();
      });

    this.dataService.getCountry(this.countryId)
      .subscribe((data: any) => {
        let lat = data.countryInfo.lat;
        let lng = data.countryInfo.long;
        this.map.setCenter({ lat, lng });
        this.country.emit(data);
      })

  }

  ngAfterViewInit() {
    // console.log(this.map.locate({ setView: true, maxZoom: 16 }));

    // this.map.on('locationfound', () => {
    //   this.country.emit
    // })

  }

}
