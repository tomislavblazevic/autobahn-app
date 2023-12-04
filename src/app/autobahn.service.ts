import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AutobahnService {
  private apiUrl ='https://autobahn.api.bund.dev';

  constructor(private http: HttpClient) { }

  getAutobahnData():Observable<any> {
    return this.http.get(`${this.apiUrl}/`);

  }
}
