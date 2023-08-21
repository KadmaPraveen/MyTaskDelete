import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/sample.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
users:any
  constructor(private sam:SampleService) {
    
   }


  ngOnInit(): void {
    this.getlist()
  }
  getlist(){
    this.sam.getcustomerlist().subscribe(res=>{

      console.log(res)
      this.users=res
    })
  
    
  
  }

}
