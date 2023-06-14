import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit{
    movies: any[] = []; // Array to store the list of movies
    filteredMovies: Movie[] = []; // Array to store the filtered movies based on genre
    genres: string[] = []; // Array to store the list of genres fetched from the API
    selectedGenres: string[] = []; // Array to store the selected genres for filtering

  
  constructor(private movieService: MovieService){}

  ngOnInit(): void {
   this.fetchMovies();
  }

  fetchMovies(){
    this.movieService.getMovies().subscribe({
      next: (response: any) => {
        this.movies = response;
        this.filteredMovies = [...this.movies]; // Initialize filteredMovies with all movies initially
        this.extractGenres();
      },
      error: (error) => {
        console.log('Error fetching movies:', error);
      }
    });
    
  }

  handleSearch(query: string): void {
    this.movieService.searchMovies(query)
      .subscribe(movies => {
        this.filteredMovies = movies;
        // Update the list of displayed movies with the filtered results
      });   
  }


  extractGenres(): void {
    const genresSet = new Set<string>(this.movies.flatMap(movie => movie.genres));
    this.genres = Array.from(genresSet);
    console.log("genres", this.genres);
  }


  toggleGenreSelection(genre: string): void {
    if (this.isGenreSelected(genre)) {
      this.selectedGenres = this.selectedGenres.filter((selectedGenre) => selectedGenre !== genre);
      console.log("selectedGenres",this.selectedGenres);
    } else {
      this.selectedGenres.push(genre);
    }
    
    this.filterMovies(); // Call filterMovies after updating selectedGenres
  }
  
  isGenreSelected(genres: string): boolean {
    return this.selectedGenres.includes(genres);
  }

  filterMovies(): void {
    this.filteredMovies = this.movies.filter((movie) => {
      return this.selectedGenres.every((selectedGenre) => movie.genres.includes(selectedGenre));
    });
    console.log("filteredMovies",this.filteredMovies)
  }

  // ngOnDestroy() {
  //   subscription.unsubscribe();
  // }
}
