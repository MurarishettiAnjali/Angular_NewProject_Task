import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DietplanService } from 'src/app/services/dietplan.service';
import { nutrition } from '../main/nutrition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dietplanform',
  templateUrl: './dietplanform.component.html',
  styleUrls: ['./dietplanform.component.css']
})
export class DietplanformComponent implements OnInit {
  model: nutrition = new nutrition();

  constructor(private dietplanService: DietplanService ,
    private matSnackBar: MatSnackBar,
    private route: Router) { }

  ngOnInit() {
  }

  onSubmit(data){
    this.dietplanService.addDietPlan(this.model).subscribe(res=>{
      this.matSnackBar.open("Diet Plan Added Successfully","Ok",{duration: 3000});
      this.route.navigate(['home'])
;    })
  }

}
