// contests.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  constructor(private _http:HttpClient) { }
  getdata(){
    let url='https://jsonplaceholder.typicode.com/users/';
    return this._http.get(url);
  }
  
}
