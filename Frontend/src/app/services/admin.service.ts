import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../models/announcementModel';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }

  deleteUser(id: string):Observable<any>{
    return this._http.delete(`http://localhost:3010/api/v1/users/${id}`);
  }

  updateUser(id: string, data: any): Observable<any> {
    return this._http.patch(`http://localhost:3010/api/v1/users/${id}`, data);
  }

  addAnnouncement(data: any): Observable<any>{
    return this._http.post('http://localhost:3010/api/v1/announcements',data);
  }
  getAnnouncementList():Observable<any>{
    return this._http.get('http://localhost:3010/api/v1/announcements');
  }
  deleteAnnouncement(id: string):Observable<any>{
    return this._http.delete(`http://localhost:3010/api/v1/announcements/${id}`);
  }
  updateAnnouncement(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:3010/api/v1/announcements/${id}`, data);
  }
  getAnnouncement(id: string):Observable<any>{
    return this._http.get<any>(`http://localhost:3010/api/v1/announcements/${id}`);
  }
 
}
