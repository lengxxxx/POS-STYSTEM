import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { Signature } from '../../authentication/signature';
// import { ChangePassword } from '../change-password/change-password';
import { User } from './user';
// import { ResponseModel } from 'src/app/_helpers/response-model';
// import { RoleAssigned } from '../role/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  put(id: number, user: User) {
    throw new Error('Method not implemented.');
  }
  post(user: User) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {
  }

  // getAll(): Observable<ResponseModel> {
  //   return this.http.get<ResponseModel>(`${environment.apiUrl}/users/v1/list`);
  // }

  getPage(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users/page`);
  }

  get(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  // put(id: number, user: User): Observable<ResponseModel> {
  //   return this.http.put<ResponseModel>(`${environment.apiUrl}/users/v1/update-info`, user);
  // }

  // post(user: User): Observable<ResponseModel> {
  //   return this.http.post<ResponseModel>(`${environment.apiUrl}/users/v1/register`, user);
  // }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/v1/delete/${id}`);
  }



  // postForgetPasswordRequest(mail: string): Observable<Signature> {
  //   return this.http.post<Signature>(`${environment.apiUrl}/users/v1/forgot-password`, {
  //     email: mail
  //   });
  // }

  postForgetPasswordVerify(signature: string, password: string, confirmPassword: string) {
    return this.http.post(`${environment.apiUrl}/users/v1/reset-password`,
      {
        confirmPassword: confirmPassword,
        password: password,
        signature: signature
      });
  }

  // changePassword(changePassword: ChangePassword): Observable<ResponseModel> {
  //   return this.http.post<ResponseModel>(`${environment.apiUrl}/users/v1/chnage-password`, changePassword);
  // }

  // getAssignedRole(userId: number): Observable<ResponseModel> {
  //   return this.http.get<ResponseModel>(`${environment.apiUrl}/users/v1/get-user-group/${userId}`);
  // }

  // postUserRole(userId: number, roleAssigned: RoleAssigned[]): Observable<ResponseModel> {
  //   return this.http.post<ResponseModel>(`${environment.apiUrl}/users/v1/assign-user-group?userId=${userId}`, roleAssigned);
  // }

}
