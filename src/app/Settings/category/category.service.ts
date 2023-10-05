import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from './category';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  constructor(private http:HttpClient) { }

  uri = "/user/param/v1";
  private apiUrl = 'http://localhost:5000/category';
  
  
  gets(): Observable<category[]> {
    return this.http.get<category[]>(this.apiUrl);
  }
  
  post(data: category): Observable<category[]> {
    return this.http.post<category[]>(this.apiUrl, data ,httpOptions);
  }
  put(data: category): Observable<category[]> {
    const url = `${this.apiUrl}/${data.id}`
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.put<category[]>(url, data ,httpOptions);
  }
  
  delete(data:category): Observable<category[]>{
    const url = `${this.apiUrl}/${data.id}`
    
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.delete<category[]>(url ,httpOptions);
  }
  
}
