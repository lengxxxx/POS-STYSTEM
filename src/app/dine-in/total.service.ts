import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Total } from './total';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  constructor(private http:HttpClient) { }

  uri = "/user/param/v1";
  private apiUrl = 'http://localhost:5000/total';
  
  gets(): Observable<Total[]> {
    return this.http.get<Total[]>(this.apiUrl);
  }
  
  post(data: Total): Observable<Total[]> {
    const totalPrice = {
      name: data.name,
      price: data.price, 
      units: 1 
    }
    return this.http.post<Total[]>(this.apiUrl,totalPrice, httpOptions);
  }
  
  put(id: Total , data: Total): Observable<Total[]> {
    const url = `${this.apiUrl}/${id.id}`
    const totalPrice = {
      // name: data.name,
      price: data.price,
      units: id.units + 1,
    }
    return this.http.put<Total[]>(url, totalPrice, httpOptions);
  }
   
  // postTable(data: Table): Observable<Table[]> {
  //   return this.http.post<Table[]>(this.apiUrl, data ,httpOptions);
  // }
  // putTable(data: Table): Observable<Table[]> {
  //   const url = `${this.apiUrl}/${data.id}`
  //   // let url = 'http://localhost:5000/table/' + data.id ;
  //   return this.http.put<Table[]>(url, data ,httpOptions);
  // }
  
  // deleteTable(data:Table): Observable<Table[]>{
  //   const url = `${this.apiUrl}/${data.id}`
    
  //   // let url = 'http://localhost:5000/table/' + data.id ;
  //   return this.http.delete<Table[]>(url ,httpOptions);
  // }
 
}
