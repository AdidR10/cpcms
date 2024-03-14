// contests.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  constructor(private _http:HttpClient) { }
  getContestList(): Observable<any>{
    // return this._http.get('http://localhost:3010/api/v1/contests');
    return this._http.get('https://codeforces.com/api/contest.list?CF=true');
  }
  addContest(data: any): Observable<any>{
    return this._http.post('http://localhost:3010/api/v1/contests',data);
  }
}
