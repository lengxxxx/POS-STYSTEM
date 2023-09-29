import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ResponseModel } from 'src/app/_helpers/response-model';
import { environment } from 'src/environments/environment';
import { ingredient } from './ingredient';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
 
  constructor(private http:HttpClient) { }

  uri = "/user/param/v1";
  private apiUrl = 'http://localhost:5000/ingredient';
  
  
  gets(): Observable<ingredient[]> {
    return this.http.get<ingredient[]>(this.apiUrl);
  }
  
  post(data: ingredient): Observable<ingredient[]> {
    return this.http.post<ingredient[]>(this.apiUrl, data ,httpOptions);
  }
  put(data: ingredient): Observable<ingredient[]> {
    const url = `${this.apiUrl}/${data.id}`
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.put<ingredient[]>(url, data ,httpOptions);
  }
  
  delete(data:ingredient): Observable<ingredient[]>{
    const url = `${this.apiUrl}/${data.id}`
    
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.delete<ingredient[]>(url ,httpOptions);
  }
  
}
