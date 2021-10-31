import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesService {
  // fake db part
  private movies: Movie[] = [];

  getAll(): Movie[] {
    // do some queries
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  createMovie(movieDate) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieDate,
    });
  }
}
