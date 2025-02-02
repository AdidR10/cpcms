import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service'; 

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private baseUrl = 'http://localhost:3010/api/v1/';

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getAuthToken();
    return new HttpHeaders().set('x-auth-token', token ? token : '');
  }

  getRequests(): Observable<any> {
    return this.http.get(`${this.baseUrl}userRequests`, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  approveRequest(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}userRequests/${id}`, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  deleteRequest(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}userRequests/${id}`, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  sendRequest(data: any): Observable<any> {
    console.log("REACHED sendRequest");
    console.log("data", data);  
    return this.http.post(`${this.baseUrl}userRequests/signup`, data, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }
}
