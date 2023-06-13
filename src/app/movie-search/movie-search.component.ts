import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  //searchQuery: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchMovies(searchQuery: string): void {
    this.search.emit(searchQuery);
    console.log(searchQuery);
  }

  

}
