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
    this.exchangeRatesService.getLatestExchangeRates().subscribe(
      response => {
        this.exchangeRates = response;
      },
      error => {
        console.error('Error fetching exchange rates:', error);
      }
    );
  }
}