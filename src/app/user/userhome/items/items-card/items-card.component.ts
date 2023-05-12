import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.css']
})
export class ItemsCardComponent {
  @Input() pd:any;
  constructor(public router:Router,public route:ActivatedRoute){}
  changeRoute(){
    this.router.navigate(['../details'],
    {
      relativeTo:this.route,state:this.pd
    })
  }
}

