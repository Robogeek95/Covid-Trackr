import { SearchService } from './../../services/search.service';
import { ApiDataService } from 'src/app/api-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";


@Component({
  selector: 'app-explorer2',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  public selectedCountry;
  public searchQuery: FormControl;
  public searchResults;
  public countries: any = [];
  public overview: any = [];
  searching: any = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: ApiDataService,
    private mapService: MapService
  ) {
    this.countries.expanded = false;
    this.overview.expanded = true;
    this.searchQuery = new FormControl();
  }

  expandItem(item): void {
    item.expanded = !item.expanded;
  }

  filterItems(query) {
    this.searchResults = this.countries.filter(c => {
      return c.country.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }

  onSearchInput() {
    this.searching = true;
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

    this.filterItems("");
    this.searchQuery.valueChanges
      .pipe(debounceTime(700))
      .subscribe(query => {
        this.searching = false;
        this.filterItems(query);
      });
  }
}
