import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Structure } from '../interface/Structure';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 apiUrl: string = 'https://localhost:7049/api/structure';
  constructor(private http: HttpClient) { }
 
  EnviarHtml(teste:string): Observable<HttpResponseBase>{
    return this.http.post<HttpResponseBase>(this.apiUrl,{structureHtml: teste},{observe: 'response'});
  }
  BuscarHtml(id:number): Observable<Structure>{
    return this.http.get<Structure>(this.apiUrl + '/' + id);
  }
  BuscarTodosHTMl(): Observable<Structure[]>{
    return this.http.get<Structure[]>(this.apiUrl);
  }
}
