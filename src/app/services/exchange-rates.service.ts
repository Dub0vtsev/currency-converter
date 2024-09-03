import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  private apiKey = import.meta.env.API_KEY;

  private apiUrl = 'https://openexchangerates.org/api/latest.json'; // look https://docs.openexchangerates.org/reference/api-introduction

  constructor(private http: HttpClient) { }

  getLatestExchangeRates() {
    console.log(import.meta.env.API_KEY)
    return this.http.get(`${this.apiUrl}?app_id=${this.apiKey}`);
    // base curency = UAH (параметром краще, але в тз указано чітко)
  }
}
