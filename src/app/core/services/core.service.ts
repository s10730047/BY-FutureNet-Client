import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { LoginForm } from '../models/forms/login-form';
// import { RegisterForm } from '../models/forms/register-form';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  baseUrl = 'http://localhost:3000';
  // baseUrl = 'http://163.17.21.41:3000';

  constructor(
    private http: HttpClient
  ) { }

  // 註冊帳號
  // Users(body: RegisterForm): Observable<object> {
  //   const apiUrl = this.baseUrl + '/register';
  //   return this.http.post(apiUrl, body);
  // }

  // // 登入帳號
  // Login(body: LoginForm): Observable<object> {
  //   const apiUrl = this.baseUrl + '/login';
  //   return this.http.post(apiUrl, body);
  // }

}
