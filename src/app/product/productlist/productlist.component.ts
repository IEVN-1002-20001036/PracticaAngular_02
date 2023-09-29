import { Component } from '@angular/core';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:Iproducto[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puestas familiar",
      "year":"febrero 3 2020",
      "precio":120000,
      "Marca":"NISSAN",
      "Color":"Verde",
      "ImagenUr1":"data:image/jpeg;base64,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nh"
    },
    {
      "productoId":2,
      "Modelo":"Sentra",
      "Descripcion":"3 puertas",
      "year":"Noviembre 4 2020",
      "precio":112000,
      "Marca":"NISSAN",
      "Color":"Verde",
      "ImagenUr1":"https://img.freepik.com/vector-gratis/coche-sedan-azul-estilo-dibujos-animados-aislado-blanco_1308-57498.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year":"Junio 2 2023",
      "precio":20000,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUr1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECcdQTnAd_vc54Sdai4Hk4GpCxvcLjgkHYiXiTf-Ysii-Bt78BXQTLrCe4lvcT9E0wng&usqp=CAU"
    }

  ]
}
