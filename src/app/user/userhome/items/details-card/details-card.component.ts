import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NutritionService } from 'src/app/services/nutrition.service';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent {
  id:any;
  details:any;
  state?:any
  constructor(private Ds:NutritionService,private ar:ActivatedRoute, private router:Router){
    this.state=this.router.getCurrentNavigation()?.extras.state;
    this.ar.params.subscribe(
      {
        next:(params)=>{
          this.id=params['id']
          this.readData()
        },
        error:()=>this.id=0
      }
    )
  }
  readData(){
    this.Ds.getDetails(this.id).subscribe(
      {
        next:(data:any)=>this.details=data,
        error:()=>this.details={}
      }
    )
  }

}
