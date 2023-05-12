import { Component } from '@angular/core';
import { NutritionService } from 'src/app/services/nutrition.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  names:any;
  cat="all";
  constructor(is:NutritionService){
    is.getNutrition().subscribe(
      {
        next:(data:any)=>this.names=data,
        error:()=>this.names=[]
      }
    )
  }
  onS(){
    this.cat = "Soups"
  }
  onB(){
    this.cat="Breads, cereals, fastfood,grains"
  }
  onD(){
    this.cat="Dairy products"
  }
  onF(){
    this.cat="Fats, Oils, Shortenings"
  }
  onM(){
    this.cat="Meat, Poultry";
  }
  onSeafood(){
    this.cat="Fish, Seafood";
  }
  onV(){
    this.cat="Vegetables";
  }

  onFruits(){
    this.cat="Fruits";
  }

  onDesserts(){
    this.cat="Desserts, sweets";
  }
  onJ(){
    this.cat="Jams, Jellies";
  }
  onSeeds(){
    this.cat="Seeds and Nuts";
  }
  onA(){
    this.cat="Drinks,Alcohol, Beverages";
  }
  onAll(){
    this.cat = "all";
  }
}



