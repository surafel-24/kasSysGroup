// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';

// // interface News {
// //   id: number;
// //   title: string;
// //   content: string;
// //   imageUrl: string;
// //   likes: number;
// //   comments: string[];
// // }

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class NewsService {
// //   private apiUrl = 'http://localhost:3000/api/news';

// //   constructor(private http: HttpClient) {}

// //   getNews(): Observable<News[]> {
// //     return this.http.get<News[]>(this.apiUrl);
// //   }

// //   getNewsById(id: number): Observable<News> {
// //     return this.http.get<News>(`${this.apiUrl}/${id}`);
// //   }

// //   updateNews(id: number, data: Partial<News>): Observable<News> {
// //     return this.http.put<News>(`${this.apiUrl}/${id}`, data);
// //   }
// // }
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// interface News {
//   id?: number;
//   title: string;
//   content: string;
//   imageUrl?: string;
//   likes?: number;
//   comments?: string[];
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class NewsService {
//   private apiUrl = 'http://localhost:3000/api/news';

//   constructor(private http: HttpClient) {}

//   getNews(): Observable<News[]> {
//     return this.http.get<News[]>(this.apiUrl);
//   }

//   likeNews(id: number): Observable<News> {
//     return this.http.patch<News>(`${this.apiUrl}/${id}/like`, {});
//   }

//   addComment(id: number, comment: string): Observable<News> {
//     return this.http.post<News>(`${this.apiUrl}/${id}/comment`, { comment });
//   }

//   addNews(news: News): Observable<News> {
//     return this.http.post<News>(this.apiUrl, news);
//   }

//   deleteNews(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }

//   getRelatedNews(id: number): Observable<News[]> {
//     return this.http.get<News[]>(`${this.apiUrl}/${id}/related`);
//   }

//   getNewsById(id: number): Observable<News> {
//     return this.http.get<News>(`${this.apiUrl}/${id}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface News {
  id?: number;
  title: string;
  content: string;
  imageUrl?: string;
  likes?: number;
  comments?: string[];
}
export interface CommentsResponse {
  comments: string[]; // Assuming comments is an array of strings
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/api/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/${id}`);
  }

  likeNews(id: number): Observable<News> {
    return this.http.patch<News>(`${this.apiUrl}/${id}/like`, {});
  }

  addComment(id: number, comment: string): Observable<News> {
    return this.http.post<News>(`${this.apiUrl}/${id}/comment`, { comment });
  }

  getComments(id: number): Observable<CommentsResponse> {
    return this.http.get<CommentsResponse>(`${this.apiUrl}/${id}/comments`);
  }

  addNews(news: News): Observable<News> {
    return this.http.post<News>(this.apiUrl, news);
  }

  deleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getRelatedNews(id: number): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/${id}/related`);
  }
}
