import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movies: any[] = [];

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
   this.fetchMovies();
  }

  fetchMovies(){
    this.movieService.getMovies().subscribe({
      next: (response:any) => {
        this.movies = response;
        // console.log(this.movies);
       // Handle login success, store user data, navigate to home page, etc.
      },
      error: (error) => {
        // Handle login failure, display error message, etc.
      }
    })
  }

  handleSearch(query: string): void {
    this.movieService.searchMovies(query)
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  // ngOnDestroy() {
  //   subscription.unsubscribe();
  // }
}
