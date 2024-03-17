import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Announcement } from '../models/announcementModel';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:3010/api/v1/';
  constructor(
    private _http:HttpClient,
    private authService: AuthenticationService
    ) { }
  
  private getHeaders(): HttpHeaders {
    const token = this.authService.getAuthToken();
    return new HttpHeaders().set('x-auth-token', token ? token : '');
  }
  deleteUser(id: string):Observable<any>{
    return this._http.delete(`${this.baseUrl}users/${id}`, { headers: this.getHeaders() })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  updateUser(id: string, data: any): Observable<any> {
    return this._http.patch(`${this.baseUrl}users/${id}`, data, { headers: this.getHeaders() })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  addAnnouncement(data: any): Observable<any>{
    return this._http.post(`${this.baseUrl}announcements`,data,{ headers: this.getHeaders() })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  getAnnouncementList():Observable<any>{
    return this._http.get(`${this.baseUrl}announcements`);
  }
  deleteAnnouncement(id: string):Observable<any>{
    return this._http.delete(`${this.baseUrl}announcements/${id}`,{ headers: this.getHeaders() })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  updateAnnouncement(id: string, data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}announcements/${id}`, data,{ headers: this.getHeaders() })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  getAnnouncement(id: string):Observable<any>{
    return this._http.get<any>(`${this.baseUrl}announcements/${id}`);
  }
 
}
