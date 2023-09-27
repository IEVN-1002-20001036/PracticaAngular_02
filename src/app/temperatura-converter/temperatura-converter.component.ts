import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura-converter',
  templateUrl: './temperatura-converter.component.html',
  styleUrls: ['./temperatura-converter.component.css']
})

export class TemperaturaConverterComponent {
  celsius: number = 0;
  fahrenheit: number = 0;
  kelvin: number = 0;

  convert(unit: string): void {
    if (unit === 'celsius') {
      this.fahrenheit = (this.celsius * 9/5) + 32;
      
    }
  }
}