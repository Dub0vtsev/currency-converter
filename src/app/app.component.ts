import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ConverterComponent } from "./components/converter/converter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'currency_converter';
}
