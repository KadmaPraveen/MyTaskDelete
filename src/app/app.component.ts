import { Component } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskpage';
  data:any;
  constructor(private sam:SampleService){
    
  }
}
