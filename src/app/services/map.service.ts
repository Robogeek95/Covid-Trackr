import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private selectedCountry = new Subject();
  private searchResult = new Subject();

  constructor() { }
  getSelectedCountry(): Observable<any> {
    return this.selectedCountry.asObservable();
  }

  updateSelectedCountry(country) {
    this.selectedCountry.next(country);
  }

  // getSearchResult(): Observable<any> {
  //   return this.searchResult.asObservable();
  // }

  // updateSearchResult(result) {
  //   this.searchResult.next(result);
  // }
}
