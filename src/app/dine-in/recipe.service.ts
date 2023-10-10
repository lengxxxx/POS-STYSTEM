import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';
import { Table } from '../Settings/table/table';
import { ResponseModel } from '../_helper/responseModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  uri = "/user/param/v1";
  private apiUrl = 'http://localhost:5000/recipe';
  
  gets(id: number): Observable<ResponseModel> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<ResponseModel>(url);
  }
  
  post(data: Recipe): Observable<Recipe> {
    const newOder = {
      name: data.name,
      price: data.price, 
      units: 1 
    }
    return this.http.post<Recipe>(this.apiUrl,newOder, httpOptions);
  }
  
  put(id: Recipe , data: Recipe): Observable<Recipe[]> {
    const url = `${this.apiUrl}/${id.id}`
    const newOder = {
      name: data.name,
      price: data.price,
      units: id.units + 1,
    }
    return this.http.put<Recipe[]>(url, newOder, httpOptions);
  }
  // deleteTable(data:Table): Observable<Table[]>{
  //   const url = `${this.apiUrl}/${data.id}`
    
  //   // let url = 'http://localhost:5000/table/' + data.id ;
  //   return this.http.delete<Table[]>(url ,httpOptions);
  // }
}
