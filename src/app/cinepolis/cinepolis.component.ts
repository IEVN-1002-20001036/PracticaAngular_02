import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  constructor() { 

  }
  nombreCompleto: string = ''
  cantidadCompradores: number = 1
  precioBase : number = 12;
  isCineco: number = 0;
  total: number= 0; 
  cantidadDeboletos: number = 1 
  boletosDisponibles: number = this.cantidadCompradores * 7;
  calcularPrecio(): number{

      let precio = this.cantidadDeboletos * this.precioBase;
      let esMiembro = (this.isCineco === 0);
      
      this.boletosDisponibles = this.cantidadCompradores *7;
      
      if(this.cantidadDeboletos >= 3 ) {
        if(this.cantidadDeboletos > 5) {
          precio = (esMiembro ? (precio* 0.85)* .90 : precio*0.85); 
            
        }
        else{
          precio = (esMiembro ? (precio*0.90) * .90 : precio*0.90);
        }
      
      }else{ 
        precio = (esMiembro ? precio*0.90 : precio);
      }
      
      if( this.cantidadDeboletos > this.cantidadCompradores*7) {
        precio = 0;
        alert(`No se puede realizar la compra el limite es 7 por persona`);
      } 
      this.total = precio
      console.log(precio);
      
      return precio
    }
  
    ngOnInit(): void {
      this.boletosDisponibles = this.cantidadCompradores * 7;
  
    }
  
}
