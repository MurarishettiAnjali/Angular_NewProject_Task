import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dcontents',
  templateUrl: './dcontents.component.html',
  styleUrls: ['./dcontents.component.css']
})
export class DcontentsComponent {
 @Input() pd:any;
}
