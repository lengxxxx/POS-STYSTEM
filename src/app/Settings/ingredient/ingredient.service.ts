import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ResponseModel } from 'src/app/_helpers/response-model';
import { environment } from 'src/environments/environment';
import { Ingredient } from './ingredient';

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
  
  
  gets(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.apiUrl);
  }
  
  post(data: Ingredient): Observable<Ingredient[]> {
    return this.http.post<Ingredient[]>(this.apiUrl, data ,httpOptions);
  }
  put(data: Ingredient): Observable<Ingredient[]> {
    const url = `${this.apiUrl}/${data.id}`
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.put<Ingredient[]>(url, data ,httpOptions);
  }
  
  delete(data:Ingredient): Observable<Ingredient[]>{
    const url = `${this.apiUrl}/${data.id}`
    
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.delete<Ingredient[]>(url ,httpOptions);
  }
  
}
