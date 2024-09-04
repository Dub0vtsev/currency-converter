import { Component } from '@angular/core';
import { ExchangeRatesService } from '../../services/exchange-rates.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  exchangeRates: any = {};
  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit(): void {
    if (!this.exchangeRatesService.isFetched()) {
      this.exchangeRatesService.getLatestExchangeRates().then(response => {
        this.exchangeRates = response;
      });
    } else {
      this.exchangeRates = this.exchangeRatesService.exchangeRates;
    }
  }
}