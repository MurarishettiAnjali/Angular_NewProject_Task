import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-dbox',
  templateUrl: './dbox.component.html',
  styleUrls: ['./dbox.component.css']
})
export class DboxComponent {
  id:any;
  details:any;
constructor(private cs : DietService,private ar:ActivatedRoute){
  this.ar.params.subscribe(
    {
      next : (params) => {
        this.id = params['id']
        this.readdata()
      },
      error : () => this.id = 0
    }
  )

}
readdata(){
  this.cs.getdetails(this.id).subscribe(
    {
      next: (data:any) => this.details = data,
      error : ()=>this.details = {}
    }
  )
}
}
