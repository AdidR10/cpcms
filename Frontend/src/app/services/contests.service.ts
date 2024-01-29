import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  constructor(private http:HttpClient) { }
  getdata(){
    let url='https://jsonplaceholder.typicode.com/users/';
    return this.http.get(url);
  }
}
