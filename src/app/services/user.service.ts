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
    return this._http.post('http://localhost:3000/requests',data);
  }
  getUserList():Observable<any>{
    return this._http.get('http://localhost:3000/onlineAPI');
  }
  deleteUser(id: number):Observable<any>{
    return this._http.delete(`http://localhost:3000/onlineAPI/${id}`);
  }
  getUser(id: number):Observable<any>{
    return this._http.get<any>(`http://localhost:3000/users/${id}`);
  }
  updateUser(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/users/${id}`, data);
  }
}
