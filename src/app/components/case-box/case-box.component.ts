import { MapService } from 'src/app/services/map.service';
import { FolderPage } from './../../folder/folder.page';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-case-box',
  templateUrl: './case-box.component.html',
  styleUrls: ['./case-box.component.scss'],
})
export class CaseBoxComponent implements OnInit {
  @ViewChild(FolderPage, { static: true }) folder;
  @Input() country;
  public details;
  public colors;
  constructor(private mapservice: MapService) {
    this.colors = this.mapservice.ranges;
  }

  ngOnInit() {
    this.details = [
      {
        name: 'Total Cases',
        figure: this.country.cases,
        new: this.country.todayCases
      },
      {
        name: 'Active Cases',
        figure: this.country.active,
      },
      {
        name: 'Recovered',
        figure: this.country.recovered,
      },
      {
        name: 'Deaths',
        figure: this.country.deaths,
        new: this.country.todayDeaths
      },
      {
        name: 'Critical Cases',
        figure: this.country.critical,
      },
      {
        name: 'Tests Taken',
        figure: this.country.tests,
      }
    ]
  }
}
