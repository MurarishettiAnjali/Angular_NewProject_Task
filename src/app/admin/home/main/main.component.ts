import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DietplanService } from 'src/app/services/dietplan.service';
import { NutritionService } from 'src/app/services/nutrition.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  gdata:any;
  searchText:any;
  constructor(private cs:NutritionService, private dietPlanService: DietplanService,private matSnackBar: MatSnackBar ){
   
    this.getProducts()
  }

  removeItem(id){
    this.dietPlanService.removeDietPlan(id).subscribe(res =>{
      this.matSnackBar.open(`product removed from plan`,'Ok',{duration: 3000});
      this.getProducts()

    });}

    getProducts(){
      this.gdata = this.cs.getNutrition().subscribe({
        next: (data:any) => this.gdata = data,
        error:()=>this.gdata = []
      })
    }

}
