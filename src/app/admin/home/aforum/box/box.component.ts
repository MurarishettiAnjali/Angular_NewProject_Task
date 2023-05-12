import { Component, Input } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() pd:any;
  rl:any[]=[];
  // reply() {
  //   // Add your reply logic here
  //   console.log('Reply button clicked');
  isReply=false;
  replyText = '';
  constructor(private us:ForumService){

  }
  reply() {
    if(this.isReply == false){
      this.isReply = true;
    }
    else{
      this.isReply = false;
    }
    console.log('Reply button clicked');
  }
  submitReply() {
    let un = sessionStorage.getItem("username");

    this.rl = this.pd.reply;
    let obj = {
      "usernmae":un,
      "comment": this.replyText
    }
    this.rl.push(obj)
    this.us.updateForum({"reply":this.rl},this.pd.id).subscribe({
      next:()=>{alert("reply successful")},
      error:()=>{alert("reply failed")}
    })
    this.replyText = ""
    this.isReply = false;
  }

}

