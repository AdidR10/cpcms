import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  codeforcesHandle: string;
  codechefHandle: string;
  atcoderHandle: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  addUser(data: any): Observable<any>{
    return this._http.post('http://localhost:3010/api/v1/requests',data);
  }

  getRequestList():Observable<any>{
    return this._http.get('http://localhost:3010/api/v1/requests');
  }
  getUserList():Observable<any>{
    return this._http.get('http://localhost:3010/api/v1/users');
  }
  
  getUser(id: string):Observable<any>{
    return this._http.get<any>(`http://localhost:3010/api/v1/users/${id}`);
  }
  
}
