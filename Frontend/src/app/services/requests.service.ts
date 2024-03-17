import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private _http:HttpClient) { }
  getRequests():Observable<any>{
    return this._http.get('http://localhost:3010/api/v1/userRequests')
  }
  approveRequest(id: string):Observable<any>{
    return this._http.get(`http://localhost:3010/api/v1/userRequests/${id}`);
  }
  deleteRequest(id: string):Observable<any>{
    return this._http.delete(`http://localhost:3010/api/v1/userRequests/${id}`);
  }
  sendRequest(data: any):Observable<any>{
    return this._http.post('http://localhost:3010/api/v1/userRequests/signup',data);
  }
}
