import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Option } from '../../models/Option.models'
@Injectable({
  providedIn: 'root'
})
export class OptionDataService {
  private serviceUrl = 'http://localhost:8080/api/getForeignInvestorsOptionData';
  constructor(private http: HttpClient) { }
  getUser(): Observable<Option[]> {
    return this.http.get<Option[]>(this.serviceUrl);
  }
}
