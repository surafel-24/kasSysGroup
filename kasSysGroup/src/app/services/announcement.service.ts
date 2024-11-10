import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private apiUrl = 'http://localhost:3000/api/announcements'; // Your API endpoint

  constructor(private http: HttpClient) {}

  getAnnouncements(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  likeAnnouncement(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/like`, {});
  }

  addAnnouncement(announcement: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, announcement);
  }
}
