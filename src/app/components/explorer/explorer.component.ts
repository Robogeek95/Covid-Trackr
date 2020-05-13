import { ApiDataService } from 'src/app/api-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';


@Component({
  selector: 'app-explorer2',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  public selectedCountry;
  public countries: any = [];
  public overview: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: ApiDataService,
    private mapService: MapService
  ) {
    this.countries.expanded = false;
    this.overview.expanded = true;

  }

  expandItem(item): void {
    item.expanded = !item.expanded;
  }

  flyTo(country) {
    this.mapService.updateSelectedCountry(country)
  }

  ngOnInit() {
    let country = this.activatedRoute.snapshot.paramMap.get('country');
    this.data.getCountry(country)
      .subscribe((data: any) => {
        this.selectedCountry = data;
      })
  }
}
