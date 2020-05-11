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
  public query: string;
  public searchResults;
  public countries: any = [];
  public casePeek: any = [];
  public cases = [{}, {}, {}, {}];

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: ApiDataService,
    private mapService: MapService
  ) {
    this.countries.expanded = true;
    this.casePeek.expanded = false;
  }

  expandItem(item): void {
    item.expanded = !item.expanded;
  }

  onSearchChange() {
    this.searchResults = this.countries.filter(c => {
      return c.country.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    });
    // this.mapService.updateSearchResult(this.searchResults);
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

    this.data.getCountries()
      .subscribe((data: any) => {
        this.countries = data;
        this.searchResults = data;
      });
  }
}
