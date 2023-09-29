import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ResponseModel } from 'src/app/_helpers/response-model';
// import { environment } from 'src/environments/environment';
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
  
  
  getTable(): Observable<Table[]> {
    return this.http.get<Table[]>(this.apiUrl);
  }
  
  postTable(data: Table): Observable<Table[]> {
    return this.http.post<Table[]>(this.apiUrl, data ,httpOptions);
  }
  putTable(data: Table): Observable<Table[]> {
    const url = `${this.apiUrl}/${data.id}`
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.put<Table[]>(url, data ,httpOptions);
  }
  
  deleteTable(data:Table): Observable<Table[]>{
    const url = `${this.apiUrl}/${data.id}`
    
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.delete<Table[]>(url ,httpOptions);
  }
  
 
}
