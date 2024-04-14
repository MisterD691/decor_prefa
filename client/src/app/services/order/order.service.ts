import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../response';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(protected http: HttpClient) { }

  create(data: Order) {
    return this.http.post<Response>(`${environment.apiUrl}/order/add`, data);
  }

  getAll() {
    return this.http.get<Response>(`${environment.apiUrl}/order/getAll`);
  }

  getById(id: string) {
    return this.http.get<Response>(`${environment.apiUrl}/order/getById/${id}`);
  }

  accept(id: string) {
    return this.http.get<Response>(`${environment.apiUrl}/order/accept/${id}`);
  }

  reject(id: string) {
    return this.http.get<Response>(`${environment.apiUrl}/order/reject/${id}`);
  }

  getByClient(id: string) {
    return this.http.get<Response>(`${environment.apiUrl}/order/getByClient/${id}`);
  }

  update(id: any, data: Order) {
    return this.http.put<Response>(`${environment.apiUrl}/order/update/${id}`, data);
  }

  remove(id: any) {
    return this.http.delete<Response>(`${environment.apiUrl}/order/delete/${id}`);
  }
}
