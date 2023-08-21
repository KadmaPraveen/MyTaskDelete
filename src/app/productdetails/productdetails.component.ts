import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
sub:any;
id:number=0;
details:any
  constructor(private route: ActivatedRoute,private sam:SampleService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
   });
  }

  ngOnInit(): void {
    this.getdetails()
    console.log(this.id)
  }
getdetails(){
  this.sam.getproductdetails(this.id).subscribe(res=>{
    console.log(res)
    this.details=res
  })
}
}
