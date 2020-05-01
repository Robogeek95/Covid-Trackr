import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://corona.lmao.ninja/v2/countries');
  }

  getCountry(country) {
    return this.http.get(`https://corona.lmao.ninja/v2/countries/${country}`)
  }
}
