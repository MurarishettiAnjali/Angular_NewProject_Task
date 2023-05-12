import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apipe'
})
export class ApipePipe implements PipeTransform {

  transform(products: any,cat:string){
    if(cat === "all"){
      return products;
    }
    return products.filter((x:any)=>x.Category === cat);
  }

}
