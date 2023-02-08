import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseServiceService<T> {
  apiUrl: string = 'https://localhost:7049/api/';
  httpClient!: HttpClient;
  httpHeaders!: HttpHeaders;




  constructor(private resource: string, private http: HttpClient) {
    this.httpClient = http
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }


  Post(obj: T) {
    return this.httpClient.post<T>(`${this.apiUrl}${this.resource}`, JSON.stringify(obj), { headers: this.httpHeaders })
  }
  PostSemJson (obj: T) {
    return this.httpClient.post<T>(`${this.apiUrl}${this.resource}`, obj)
  }
  Get() {
    return this.httpClient.get<T[]>(`${this.apiUrl}${this.resource}`);
  }
  GetById(id: number) {
    return this.httpClient.get<T[]>(`${this.apiUrl}${this.resource}/${id}`);
  }
  Delete(id:number){
    return this.httpClient.delete(`${this.apiUrl}${this.resource}/${id}`);
  }
}
