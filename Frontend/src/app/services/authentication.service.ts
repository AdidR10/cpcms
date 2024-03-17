import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private apiUrl = 'http://localhost:3010/api/v1/auth'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, { username, password })
      .pipe(
        map(response => {
          // Check if the response contains a token
          if (response && response.token) {
            // Store token in sessionStorage instead of sessionStorage
            sessionStorage.setItem('token', response.token);
          }
          // console.log(response);
          return response;
        }),
        catchError(error => {
          return throwError(error); // Pass error to the caller
        })
      );
  }

  logout(): void {
    // Remove token from sessionStorage
    sessionStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    // Check if token exists in sessionStorage
    return !!sessionStorage.getItem('token');
  }
  
  getAuthToken(): string | null {
    return sessionStorage.getItem('token');
  }


}
