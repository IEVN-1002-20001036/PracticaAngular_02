import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicion',
  templateUrl: './multiplicion.component.html',
  styleUrls: ['./multiplicion.component.css']
})
export class MultiplicionComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  operacion: string = '';

  calcularResultado() {
    this.numero1 = Number(this.numero1);
    this.numero2 = Number(this.numero2);
  
    if (!isNaN(this.numero1) && !isNaN(this.numero2)) {
      let sumaRepetitiva = '';
      let suma = 0;
      for (let i = 0; i < this.numero1; i++) {
        suma += this.numero2;
        sumaRepetitiva += (i > 0 ? ' + ' : '') + this.numero2;
      }
  
      this.resultado = suma;
  
      this.operacion = `${sumaRepetitiva} = ${this.resultado}`;
    } else {
      this.resultado = NaN;
      this.operacion = 'Entradas no valida';
    }
  }
}