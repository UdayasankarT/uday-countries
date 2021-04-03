import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  student: Array<{ id: number; name: string; }>;
  
  @Input() set dataset(value:Array<{ id: number, name: string }>) {
    this.student = value;
  }
  constructor() {
    this.student = []
   }

  ngOnInit(): void {
  }

}
