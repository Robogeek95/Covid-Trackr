import { SearchModalPage } from './../search-modal/search-modal.page';
import { MapService } from './../services/map.service';
import { ApiDataService } from './../api-data.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
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
  public ranges;
  public countries: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private data: ApiDataService,
    private mapService: MapService,
    public modalController: ModalController
  ) {
    this.casePeek.expanded = true
    this.countries.expanded = false
    this.ranges = this.mapService.getRange();

    // get selected country to flyto
    this.mapService.getSelectedCountry()
      .subscribe(c => {
        this.removeMarker();
        let lat = c.countryInfo.lat;
        let lng = c.countryInfo.long;
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
          .addTo(this.map)
        // route to country
        this.router.navigate(['map', c.country]);
        // remove marker after three secondsx
        // setTimeout(this.removeMarker, 3000)
      })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchModalPage
    });
    return await modal.present();
  }

  private removeMarker() {
    this.marker.remove()
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
      el.style.borderRadius = '50%';
      el.style.height = '20px';
      el.style.width = '20px';

      // marker color based on cases
      if (c.cases >= 0 && c.deaths <= 99) {
        el.style.backgroundColor = this.ranges[0].color;
      }
      if (c.cases >= 100 && c.deaths <= 999) {
        el.style.backgroundColor = this.ranges[1].color;
      }
      if (c.cases >= 1000 && c.deaths <= 9999) {
        el.style.backgroundColor = this.ranges[2].color;
      }
      if (c.cases >= 10000) {
        el.style.backgroundColor = this.ranges[3].color;
      }

      el.style.opacity = '0.7';
      el.addEventListener('click', () => {

        const lon = c.countryInfo.lat;
        const lat = c.countryInfo.long;
        new mapboxgl.Popup()
          .setLngLat([lat, lon])
          .setHTML('description')
          .addTo(this.map);
        this.router.navigate(['/map', c.country]);
      })

      return el;
    }
    //

    for (const c of this.countries) {
      const lon = c.countryInfo.lat;
      const lat = c.countryInfo.long;
      let content = this.mapService.makePopup(c)
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
