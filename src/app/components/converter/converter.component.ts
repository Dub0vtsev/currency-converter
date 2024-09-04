import { Component } from '@angular/core';
import { ExchangeRatesService } from '../../services/exchange-rates.service';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, NgFor, KeyValuePipe],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {

  exchangeRates: any = {};

  amountFrom: number = 1;
  amountTo: number = 0;
  fromCurrency: string = 'EUR';
  toCurrency: string = 'UAH';

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit(): void {
    if (!this.exchangeRatesService.isFetched()) {
      this.exchangeRatesService.getLatestExchangeRates().then(response => {
        this.exchangeRates = response;
        this.convertCurrencyFrom();
      });
    } else {
      this.exchangeRates = this.exchangeRatesService.exchangeRates;
      this.convertCurrencyFrom();
    }
  }

  convertCurrencyFrom() {
    const fromRate = this.exchangeRates.rates[this.fromCurrency];
    const toRate = this.exchangeRates.rates[this.toCurrency];
    this.amountTo = +((this.amountFrom * toRate) / fromRate).toFixed(2);
  }

  convertCurrencyTo() {
    const fromRate = this.exchangeRates.rates[this.fromCurrency];
    const toRate = this.exchangeRates.rates[this.toCurrency];
    this.amountFrom = +((this.amountTo * fromRate) / toRate).toFixed(2);
  }

  swapCurrencies() {
    let tmp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = tmp;

    this.convertCurrencyFrom();
  }
}
