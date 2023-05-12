import { Component } from '@angular/core';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.component.html',
  styleUrls: ['./dietplan.component.css']
})
export class DietplanComponent {
  cdata:any;
  constructor(private cs:DietService){
    this.cdata = cs.getdiet().subscribe({
      next: (data:any) => this.cdata = data,
      error:()=>this.cdata = []
    })
  }
}
