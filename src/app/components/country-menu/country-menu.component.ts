import { ApiDataService } from './../../api-data.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-menu',
  templateUrl: './country-menu.component.html',
  styleUrls: ['./country-menu.component.scss'],
})
export class CountryMenuComponent implements OnInit, AfterViewInit {
  countries;

  constructor(private activatedRoute: ActivatedRoute, private data: ApiDataService) { }

  ngOnInit() {
      this.data.getCountries()
      .subscribe(data => {
        this.countries = data;
      })

  }

  ngAfterViewInit() {

  }

}
