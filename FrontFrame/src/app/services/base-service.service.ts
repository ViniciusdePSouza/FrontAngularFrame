import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase, HttpStatusCode } from '@angular/common/http';
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
  PutSemJson (obj: T,id:number) {
    return this.httpClient.put<T>(`${this.apiUrl}${this.resource}/${id}`,obj,{ headers: this.httpHeaders })
  }

  Get() {
    return this.httpClient.get<T[]>(`${this.apiUrl}${this.resource}`);
  }
  GetById(id: number) {
    return this.httpClient.get<T>(`${this.apiUrl}${this.resource}/${id}`);
  }
  Delete(id:number): Observable<HttpResponse<HttpStatusCode>>{
    return this.httpClient.delete<HttpStatusCode>(`${this.apiUrl}${this.resource}/${id}`,{observe: 'response'});
  }
}
