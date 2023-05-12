import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-itemscard',
  templateUrl: './itemscard.component.html',
  styleUrls: ['./itemscard.component.css']
})
export class ItemscardComponent {
  @Input() pd:any;
  constructor(public router:Router,public route:ActivatedRoute){}
  changeRoute(){
    this.router.navigate(['../details'],
    {
      relativeTo:this.route,state:this.pd
    })
  }

}
