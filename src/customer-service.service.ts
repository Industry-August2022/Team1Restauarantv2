import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private usersUrl: string;
  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8014/insert'; 
  }
  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.usersUrl);
  }

  public save(user: Customer) {
    return this.http.post<Customer>(this.usersUrl, user);
  }
}
