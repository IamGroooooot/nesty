import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { Movie } from './movies.entity';
import { MoviesService } from './movies.service';

// controlls entry point of movies
// basically a router
@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  // a route
  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.createMovie(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.movieService.deleteOne(movieId);
  }

  //   @Patch('/:id')
  //   patch(@Param('id') movieId: string, @Body() updateData) {
  //     return {
  //       updateMovie: movieId,
  //       ...updateData,
  //     };
  //   }
}
