import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(protected http: HttpClient) { }

  create(data: Article) {
    return this.http.post<Response>(`${environment.apiUrl}/category/add`, data);
  }

  getAll() {
    return this.http.get<Response>(`${environment.apiUrl}/category/getAll`);
  }

  getById(id: string) {
    return this.http.get<Response>(`${environment.apiUrl}/category/getById/${id}`);
  }

  update(id: any, data: Article) {
    return this.http.put<Response>(`${environment.apiUrl}/category/update/${id}`, data);
  }
  
  remove(id: any) {
    return this.http.delete<Response>(`${environment.apiUrl}/category/delete/${id}`);
  }
}
