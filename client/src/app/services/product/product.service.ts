import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../response';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(protected http: HttpClient) { }

  create(data: Product) {
    return this.http.post<Response>(`${environment.apiUrl}/product/add`, data);
  }

  getAll() {
    return this.http.get<Response>(`${environment.apiUrl}/product/getAll`);
  }

  getById(id: string) {
    return this.http.get<Response>(`${environment.apiUrl}/product/getById/${id}`);
  }

  getByCategory(id: string) {
    return this.http.get<Response>(`${environment.apiUrl}/product/getByCategory/${id}`);
  }

  update(id: any, data: Product) {
    return this.http.put<Response>(`${environment.apiUrl}/product/update/${id}`, data);
  }

  remove(id: any) {
    return this.http.delete<Response>(`${environment.apiUrl}/product/delete/${id}`);
  }
}
