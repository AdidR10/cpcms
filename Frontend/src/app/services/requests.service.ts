import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private _http:HttpClient) { }
  getRequests():Observable<any>{
    return this._http.get('http://localhost:3000/requests')
  }
}
