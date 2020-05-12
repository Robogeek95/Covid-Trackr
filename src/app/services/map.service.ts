import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private selectedCountry = new Subject();

  ranges = [
    {
      color: '#5EE2A0',
      range: '1 - 99'
    },
    {
      color: '#A177FF',
      range: '100 - 999'
    },
    {
      color: '#FFA177',
      range: '1,000 - 9,999'
    },
    {
      color: '#FF4141',
      range: '10,000 or more'
    }
  ]

  constructor() { }
  getSelectedCountry(): Observable<any> {
    return this.selectedCountry.asObservable();
  }

  updateSelectedCountry(country) {
    this.selectedCountry.next(country);
  }

  getRange() {
    return this.ranges;
  }

  // getSearchResult(): Observable<any> {
  //   return this.searchResult.asObservable();
  // }

  // updateSearchResult(result) {
  //   this.searchResult.next(result);
  // }
}
