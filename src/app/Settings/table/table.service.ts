import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from './table';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) { }

  uri = "/user/param/v1";
  private apiUrl = 'http://localhost:5000/table';
  
  getTableById(id: any): Observable<Table> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Table>(url);
  }
  
  getTable(): Observable<Table[]> {
    return this.http.get<Table[]>(this.apiUrl);
  }
  
  postTable(data: Table): Observable<Table[]> {
    return this.http.post<Table[]>(this.apiUrl, data ,httpOptions);
  }
  putTable(data: Table ): Observable<Table> {
    console.log("putTable::::",data);
    
    const url = `${this.apiUrl}/${data.id}`
    return this.http.put<Table>(url, data ,httpOptions);
  }
  
  deleteTable(data:Table): Observable<Table[]>{
    const url = `${this.apiUrl}/${data.id}`
    
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.delete<Table[]>(url ,httpOptions);
  }
}
