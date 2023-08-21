import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/sample.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
product:any
  constructor(private sam:SampleService) { }

  ngOnInit(): void {
    this.getproductlist()
  }
  getproductlist(){
    this.sam.getproductlist().subscribe(res=>{
      console.log(res)
      this.product=res
    })
  }

}
