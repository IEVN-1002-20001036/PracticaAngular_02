import { Component } from '@angular/core';

@Component({
  selector: 'app-suma2',
  templateUrl: './suma2.component.html',
  styleUrls: ['./suma2.component.css']
})
export class Suma2Component {
  num1: string = ''
  num2: string = ''
  resultado: number = 0
  sumar(): void {
      this.resultado= parseInt(this.num1)+parseInt(this.num2)
    
    
  }
}
  
