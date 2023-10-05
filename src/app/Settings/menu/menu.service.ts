import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ResponseModel } from 'src/app/_helpers/response-model';
import { environment } from 'src/environments/environment';
import { Menu} from './menu';
import { stock } from '../stock/stock';
import { Ingredient } from '../ingredient/ingredient';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getTemplate() {
    let apiUrl = 'http://localhost:5000/ingredient';
    return this.http.get<Ingredient[]>(apiUrl);
  }

  constructor(private http:HttpClient) { }

  uri = "/user/param/v1";
  private apiUrl = 'http://localhost:5000/menu';
  
  
  gets(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl, httpOptions);
  }
  
  post(data: Menu): Observable<Menu[]> {
    return this.http.post<Menu[]>(this.apiUrl, data ,httpOptions);
  }
  put(data: Menu): Observable<Menu[]> {
    const url = `${this.apiUrl}/${data.id}`
    // let url = 'http://localhost:5000//' + data.id ;
    return this.http.put<Menu[]>(url, data ,httpOptions);
  }
  
  delete(data:Menu): Observable<Menu[]>{
    const url = `${this.apiUrl}/${data.id}`
    
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.delete<Menu[]>(url ,httpOptions);
  }
  
 
}
