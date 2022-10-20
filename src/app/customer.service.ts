import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8074/Customer'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
   }
   getAll(): Observable<any>{
     return this.http.get(baseUrl);
   }
   delete(id : any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  create(newCustomer:{customerName:string, address:string}){
    this.http.post(baseUrl,newCustomer).subscribe(
      (res)=>{console.log(res+"You are logged in");}
    );
   }
  get(id :any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
