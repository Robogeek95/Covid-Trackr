import { ApiDataService } from 'src/app/api-data.service';
import { MapService } from 'src/app/services/map.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchQuery: FormControl;
  public searchResults = [];
  public countries: any = [];
  searching: any = false;


  constructor(
    private mapService: MapService,
    private data: ApiDataService,
  ) {
    this.searchQuery = new FormControl();
  }

  flyTo(country) {
    this.mapService.updateSelectedCountry(country)
  }

  onSearchInput() {
    this.searching = true;
  }

  filterItems(query) {
    this.searchResults = this.countries.filter(c => {
      return c.country.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }


  ngOnInit() {
    this.data.getCountries()
      .subscribe((data: any) => {
        this.countries = data;
        this.filterItems("");
      });

    this.searchQuery.valueChanges
      .pipe(debounceTime(700))
      .subscribe(query => {
        this.searching = false;
        this.filterItems(query);
      });
  }

}
