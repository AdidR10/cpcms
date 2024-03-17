import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service'; 

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private _http:HttpClient, 
    private authService: AuthenticationService
  ) { }

  getRequests(): Observable<any> {
    const token = this.authService.getAuthToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get('http://localhost:3010/api/v1/userRequests', { headers });
  }

  approveRequest(data: any):Observable<any>{
    return this._http.post('http://localhost:3010/api/v1/users/',data);
  }
  deleteRequest(id: string):Observable<any>{
    return this._http.delete(`http://localhost:3010/api/v1/userRequests/${id}`);
  }
  sendRequest(data: any):Observable<any>{
    return this._http.post('http://localhost:3010/api/v1/userRequests/signup',data);
  }
}
