import { MarkerService } from './marker.service';
import { ApiDataService } from './api-data.service';
import { Component, OnInit } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public countries;
  public results;
public countryId;
  public appLinks = [
    {
      title: 'Map',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'Feed',
      url: '/feed',
      icon: 'albums'
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];
  public social = ['logo-twitter', 'logo-linkedin', 'logo-github'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiDataService,
    private markerService: MarkerService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async search(query: string) {
    this.results = await this.countries.filter(country => {
      return country.country.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }


  setPlace() {
    this.markerService.gotoPlace();
  }

  onSearchChange(e: any) {
    let query = e.detail.value;
    this.search(query);
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appLinks.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.apiService.getCountries()
      .subscribe((data) => {
        this.countries = data
        this.search("");
      })

    this.countryId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.results)
  }
}
