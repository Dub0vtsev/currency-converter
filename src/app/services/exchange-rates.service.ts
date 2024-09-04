import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  public exchangeRates: any;
  public isDataFetched = false;

  private apiKey = import.meta.env.NG_APP_API_KEY;
  private apiUrl = 'https://openexchangerates.org/api/latest.json'; // look https://docs.openexchangerates.org/reference/api-introduction

  constructor(private http: HttpClient) { }

  getLatestExchangeRates(): Promise<any> {
    if (!this.isDataFetched) {
      return this.http.get(`${this.apiUrl}?app_id=${this.apiKey}`)
        .toPromise()
        .then(response => {
          this.exchangeRates = response;
          this.isDataFetched = true;
          return this.exchangeRates;
        });
    } else {
      return Promise.resolve(this.exchangeRates);
    }
  }

  isFetched(): boolean {
    return this.isDataFetched;
  }
}
