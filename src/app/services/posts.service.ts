import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://jsonplaceholder.typicode.com/${query}`;
    return this.http.get(url);
  }

  getPosts() {
    return this.getQuery('posts');
  }

  getComments(id: string) {
    return this.getQuery(`posts/${id}/comments`);
  }
}
