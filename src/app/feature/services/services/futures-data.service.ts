import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { Futures } from '../../models/Futures.models'
@Injectable({
  providedIn: 'root'
})
export class FuturesDataService {

  private serviceUrl = 'http://localhost:8080/api/getFuturesData';

  constructor(private http: HttpClient) {}

  getFutureData() : Observable<Futures[]>{
    return this.http.get<Futures[]>(this.serviceUrl);
  }
}
