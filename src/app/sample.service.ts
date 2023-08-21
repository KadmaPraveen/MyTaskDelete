import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { }
  sendGetRequest(){
    return this.http.get("http://localhost:7029/api/AdminEmployees")
  }
  login(uers:any){
return this.http.post("http://localhost:7126/api/Customers/Login",uers)
  }
  getcustomerlist(){
    return this.http.get("http://localhost:7126/api/Customers")
  }
getproductlist(){
  return this.http.get("http://localhost:7126/api/Products")
}
getproductdetails(id:number){
  return this.http.get('http://localhost:7126/api/Products/'+id)
}
}
