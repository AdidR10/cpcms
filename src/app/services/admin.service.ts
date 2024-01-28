import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }

  deleteUser(id: number):Observable<any>{
    return this._http.delete(`http://localhost:3000/onlineAPI/${id}`);
  }
  updateUser(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/users/${id}`, data);
  }

  addAnnouncement(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/announcements',data);
  }
  getAnnouncementList():Observable<any>{
    return this._http.get('http://localhost:3000/announcements');
  }
}
