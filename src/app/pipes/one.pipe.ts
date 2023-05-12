import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'one'
})
export class OnePipe implements PipeTransform {

  transform(products: any,cat:string){
    if(cat === "all"){
      return products;
    }
    return products.filter((x:any)=>x.Category === cat);
  }

}
