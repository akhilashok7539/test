import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }
  getalldata()
  {
    return this.http.get('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=IN');
  }
}
