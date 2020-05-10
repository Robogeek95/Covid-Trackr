import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from './../../api-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-menu',
  templateUrl: './case-menu.component.html',
  styleUrls: ['./case-menu.component.scss'],
})
export class CaseMenuComponent implements OnInit {
  selectedCountry

  constructor(private data: ApiDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let country = this.activatedRoute.snapshot.paramMap.get('country');
    this.data.getCountry(country)
      .subscribe((data: any) => {
        this.selectedCountry = data;
        console.log(this.selectedCountry);
      })
  }

}
