import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-amainpage',
  templateUrl: './amainpage.component.html',
  styleUrls: ['./amainpage.component.css']
})
export class AmainpageComponent {
  constructor(private router:Router,private route:ActivatedRoute,public userService: UserService){}
  navigate(url:string){
    if(url==""){
      window.location.reload()
    }
    else{
      this.router.navigate([url],{relativeTo:this.route})
    }
  }
  logout(){
    this.router.navigateByUrl('/login')
  }

}
