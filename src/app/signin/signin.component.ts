import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username:any
  password:any
  constructor(private sam:SampleService, private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    var users={
      
"userName": this.username,
"password": this.password
    }

    this.sam.login(users).subscribe((res:any)=>{
      console.log(res)
      if(res.status){debugger
        localStorage.setItem('users',JSON.stringify(res.res));
this.router.navigate(['/']);
      }else{
        alert("incorrectdetails")
      }
    })
  }
}
