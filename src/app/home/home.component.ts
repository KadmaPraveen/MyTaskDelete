import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
list:any
  constructor(private sam:SampleService) { }

  ngOnInit(): void {
    this.getproductlist()
  }
getproductlist(){
  this.sam.getproductlist().subscribe(res=>{
    console.log(res)
    this.list=res
  })
}
}
