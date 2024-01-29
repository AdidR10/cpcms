// contests.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContestsService {
  constructor(private http: HttpClient) {}

  getContestData(): Observable<any[]> {
    let url = 'https://codeforces.com/api/contest.list';
    return this.http.get<any[]>(url).pipe(map((response: any) => response.result));
  }
}
