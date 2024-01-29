import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  constructor(private _http:HttpClient) { }
  getdata(){
    let url='https://jsonplaceholder.typicode.com/users/';
    return this._http.get(url);
  }
  addContest(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/upcoming-contests',data);
  }
}
