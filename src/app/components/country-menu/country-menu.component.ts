import { ApiDataService } from './../../api-data.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-menu',
  templateUrl: './country-menu.component.html',
  styleUrls: ['./country-menu.component.scss'],
})
export class CountryMenuComponent implements OnInit, AfterViewInit {
  selectedCountry

  constructor(private activatedRoute: ActivatedRoute, private data: ApiDataService) { }

  ngOnInit() {
    let country = this.activatedRoute.snapshot.paramMap.get('country');
    this.data.getCountry(country)
      .subscribe((data: any) => {
      })

  }

  ngAfterViewInit() {


    console.log(this.selectedCountry)
  }

}
