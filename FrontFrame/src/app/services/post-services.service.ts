import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostServices extends BaseServiceService<any>{

  
  constructor(  private httpclient: HttpClient) {
    super("News",httpclient);
   }

}
