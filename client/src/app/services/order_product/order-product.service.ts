import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderProduct } from './order-product';
import { Response } from '../response';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {

  constructor(protected http: HttpClient) { }

  create(data: OrderProduct[]) {
    return this.http.post<Response>(`${environment.apiUrl}/orderProduct/add`, data);
  }

  getAll() {
    return this.http.get<Response>(`${environment.apiUrl}/orderProduct/getAll`);
  }

  getById(id: string) {
    return this.http.get<Response>(`${environment.apiUrl}/orderProduct/getById/${id}`);
  }

  getByClient(id: string) {
    return this.http.get<Response>(`${environment.apiUrl}/orderProduct/getByClient/${id}`);
  }

  getByProduct(id: any) {
    return this.http.get<Response>(`${environment.apiUrl}/orderProduct/getByProduct/${id}`);
  }

  update(id: any, data: OrderProduct) {
    return this.http.put<Response>(`${environment.apiUrl}/orderProduct/update/${id}`, data);
  }

  remove(id: any) {
    return this.http.delete<Response>(`${environment.apiUrl}/orderProduct/delete/${id}`);
  }
}
