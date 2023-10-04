import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent {
  celsius: number = 0;
  fahrenheit: number = 0;
  kelvin: number = 0;

  convert(unit: string): void {
    if (unit === 'celsius') {
      this.fahrenheit = (this.celsius * 9/5) + 32;
      this.kelvin = this.celsius + 273.15;
    }
  }
}
