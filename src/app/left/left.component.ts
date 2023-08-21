import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
 data:any
  constructor() {
     this.data= JSON.parse(localStorage.getItem("users") || '{}') 
   }

  ngOnInit(): void {
  }

}
