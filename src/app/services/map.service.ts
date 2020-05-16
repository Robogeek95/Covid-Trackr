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

  getRangeColor(c): string {
    if (c.cases >= 0 && c.cases <= 99) {
      return this.ranges[1].toString();
    }
    if (c.cases >= 100 && c.cases <= 999) {
      return this.ranges[1].toString();
    }
    if (c.cases >= 1000 && c.cases <= 9999) {
      return this.ranges[1].toString();
    }
    if (c.cases >= 10000) {
      return this.ranges[1].toString();
    }
  }

  makePopup(data: any): String {
    return `<div>Country: ${data.country}</div>
    <div>Cases: ${data.cases}</div>
    <div>Deaths: ${data.deaths}</div>
    <div>Recovered: ${data.recovered}</div>`
  };
}
