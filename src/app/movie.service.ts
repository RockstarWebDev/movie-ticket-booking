import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.apiUrl);
  }

  searchMovies(query: string): Observable<Movie[]> {
    const searchUrl = `${this.apiUrl}?q=${query}`; // Append the search query to the API URL
    return this.http.get<Movie[]>(searchUrl);
  }
}
