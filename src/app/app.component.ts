import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular';
  student: Array<{ id: number, name: string }>
  constructor() {
    this.student = [
      {
        id:1,name:"Sankar"
      },
      {
        id:2,name:"Sankar"
      },
      {
        id:3,name:"Sankar"
      },
      {
        id:1,name:"Sankar"
      },
    ]
  }
  
}
