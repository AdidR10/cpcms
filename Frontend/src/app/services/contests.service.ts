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

  // Method to fetch a contest by its ID
  getContestById(contestId: string): Observable<any> {
    return this._http.get(`http://localhost:3010/api/v1/contests/${contestId}`, { headers: this.getHeaders() });
  }
  getContestList(): Observable<any> {
    return this._http.get('http://localhost:3010/api/v1/contests');
  }

  addContest(data: any): Observable<any> {
    return this._http.post('http://localhost:3010/api/v1/contests', data,{ headers: this.getHeaders() });
  }


  // Method to delete a contest by its ID
  deleteContest(contestId: string): Observable<any> {
    return this._http.delete(`http://localhost:3010/api/v1/contests/${contestId}`, { headers: this.getHeaders() });
  }

  // Method to update a contest by its ID
  updateContest(contestId: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:3010/api/v1/contests/${contestId}`, data, { headers: this.getHeaders() });
  }

  
 

}
