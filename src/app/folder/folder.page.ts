import { MapService } from './../services/map.service';
import { ApiDataService } from './../api-data.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public map;
  public searchResults;
  query;
  public passedCountry;
  public marker = new mapboxgl.Marker()
  cases = [{}, {}, {}]
  public casePeek: any = [];
  public countries: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private data: ApiDataService,
    private mapService: MapService
  ) {
    this.casePeek.expanded = true
    this.countries.expanded = false

    // get selected country to flyto
    this.mapService.getSelectedCountry()
      .subscribe(country => {
        this.marker.remove()
        let lat = country.countryInfo.lat;
        let lng = country.countryInfo.long;
        this.map.flyTo({
          // These options control the ending camera position: centered at
          // the target country, at zoom level 9.
          center: [lng, lat],
          zoom: 3,
          bearing: 0,

          curve: 1, //change the speed at which it zooms out

          // this animation is considered essential with respect to prefers-reduced-motion
          essential: true
        });
        // place marker on country
        this.marker
          .setLngLat([lng, lat])
          .addTo(this.map);;
      })
  }

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

  expandItem(item): void {
    item.expanded = !item.expanded;
  }

  ngOnInit() {
    this.initMap()
    this.data.getCountries()
      .subscribe((data: any) => {
        this.countries = data;
        this.searchResults = data;
        this.customMarker();
      });
  }

}
