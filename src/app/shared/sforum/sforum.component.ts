import { Component } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-sforum',
  templateUrl: './sforum.component.html',
  styleUrls: ['./sforum.component.css']
})
export class SforumComponent {
  forums:any;
  com:any;
  constructor(private fs:ForumService){
      fs.getForum().subscribe({
        next:(data:any)=>this.forums = data,
        error:()=>this.forums=[]
      })
  }
  onPost(){
    let obj ={
      "username":sessionStorage.getItem("username"),
      "comment":this.com
    }
    this.fs.postForum(obj).subscribe({
      next:()=>alert("successfully Posted"),
      error:()=>alert("Error on posting")
    })
    window.location.reload()
  }

}
