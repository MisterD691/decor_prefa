import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Response } from '../response';
import { AuthService } from 'src/app/core/auth/auth.service';
import { asyncScheduler, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected http: HttpClient,
    protected auth: AuthService
    ) { }

  signUp(data: any) {
    return this.http.post<Response>(`${environment.apiUrl}/user/signUp`, data);
  }

  signIn(data: any) {
    return this.http.post<Response>(`${environment.apiUrl}/user/signIn`, data);
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

  logout() {
    return scheduled([true], asyncScheduler).subscribe(() => {
      return this.auth.disconnect();
    });
  }

}
