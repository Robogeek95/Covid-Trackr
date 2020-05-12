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

  makePopup(data: any): String {
    return `<div>Country: ${data.country}</div>
    <div>Cases: ${data.cases}</div>
    <div>Deaths: ${data.deaths}</div>
    <div>Recovered: ${data.recovered}</div>`
  };
}
