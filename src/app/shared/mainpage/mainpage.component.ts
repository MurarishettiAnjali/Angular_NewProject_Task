import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
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
// lang:any="english"
//   languages:any=[
//     {name:"English",value:"english"},
//     {name:"Telugu",value:"telugu"},
//     {name:"Tamil",value:"tamil"},
//     {name:"hindi",value:"hindi"}

//   ]
//   constructor(private ts:TranslateService){
//     this.ts.use(this.lang)
//   }
//   changeLang():void{
//     this.ts.use(this.lang)
//  }
}

