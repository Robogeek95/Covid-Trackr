import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makePopup(data: any): String {
    return `<div>Country: ${data.country}</div>
    <div>Cases: ${data.cases}</div>
    <div>Deaths: ${data.deaths}</div>
    <div>Recovered: ${data.recovered}</div>`
  };
}
