import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service'; 


@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  constructor(private _http: HttpClient, private authService: AuthenticationService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getAuthToken();
    return new HttpHeaders().set('x-auth-token', token ? token : '');
  }

  getContestList(): Observable<any> {

    // Make GET request with headers
    return this._http.get('http://localhost:3010/api/v1/contests', { headers: this.getHeaders() });
  }

  addContest(data: any): Observable<any> {
    return this._http.post('http://localhost:3010/api/v1/contests', data);
  }
}
