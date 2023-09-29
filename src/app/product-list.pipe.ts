import { ImportProvidersSource, Pipe, PipeTransform } from '@angular/core';
import { Iproducto } from './product/iproducto';

@Pipe({
  name: 'productoFilter'
})
export class ProductListPipe implements PipeTransform {

  transform(value:Iproducto[], args:string): Iproducto[] {
    let filter:string=args? args.toLocaleLowerCase():'';
    return filter ? value.filter((product:Iproducto)=>
    product.Modelo.toLocaleLowerCase().indexOf(filter)!=-1):value;

    }
    
  }


