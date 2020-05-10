import { Router } from '@angular/router';
import { ApiDataService } from './../../api-data.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapComponent } from '../map/map.component';
@Component({
  selector: 'app-country-menu',
  templateUrl: './country-menu.component.html',
  styleUrls: ['./country-menu.component.scss'],
})
export class CountryMenuComponent implements OnInit, AfterViewInit {
  public countries;
  public searchResults;
  query;


  constructor(
    private activatedRoute: ActivatedRoute,
    private data: ApiDataService,
    private map: MapComponent,
    private router: Router 
  ) { }

  ngOnInit() {
    this.data.getCountries()
      .subscribe(data => {
        this.countries = data;
        this.searchResults = this.countries;
      })
  }

  onSearchChange(e) {
    this.searchResults = this.countries.filter(c => {
      return c.country.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    });
  }

  flyTo(country) {
    // this.map.flyTo({
    //   center: data.geometry.coordinates
    // })
    this.router.navigate(['/', country.country])
  }

  ngAfterViewInit() {

  }

}
