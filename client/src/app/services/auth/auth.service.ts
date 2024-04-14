import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { asyncScheduler, scheduled, tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from '../user/user.service';
import { LocalStorage } from 'src/app/core/local-storage.service';
import { ICredential } from '../credential';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    protected http: HttpClient,
    protected auth: AuthService,
    protected localStorage: LocalStorage,
    protected user: UserService,
  ) { }

  login(body: ICredential) {
    return this.http.post<any>(`${environment.apiUrl}/v1/login`, body);
  }

  setDataAndRedirect(resData: any) {
    const userId = resData.user.id;
    this.user.getById(userId).subscribe((resp) => {
      
    });
  }

  logout() {
    return scheduled([true], asyncScheduler).subscribe(() => {
      return this.auth.disconnect();
    });
  }
}
