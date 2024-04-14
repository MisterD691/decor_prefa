import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Response } from '../response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }

  signUp(data: any) {
    return this.http.post<Response>(`${environment.apiUrl}/v1/user/signUp`, data);
  }

  signIn(data: any) {
    return this.http.post<Response>(`${environment.apiUrl}/v1/user/signIn`, data);
  }

  getAll() {
    return this.http.get<Response>(`${environment.apiUrl}/user/getAll`);
  }

  getById(id: string) {
    return this.http.get<Response>(`${environment.apiUrl}/user/getById/${id}`);
  }

  update(id: any, data: User) {
    return this.http.put<Response>(`${environment.apiUrl}/user/update/${id}`, data);
  }

  remove(id: any) {
    return this.http.delete<Response>(`${environment.apiUrl}/user/delete/${id}`);
  }

}
