import { Controller, Get, Param, Post, Body, Delete, Patch, Query } from '@nestjs/common';

// controlls entry point of movies
// basically a router
@Controller('movies')
export class MoviesController {
    // a route
    @Get()
    getAll() {
        return 'Return all movies.'
    }

    // deal with query arg
    // s.t. ?key=val
    // http://xx.xx.xxx.38:8080/movies/search?year=2012
    @Get('search')
    search(@Query('year') targetYear:string) {
        return `searching for a movie made after: ${targetYear}`;
    }

    @Get('/:id')
    getOne(@Param("id") movieId:string) {
        return `Retruns one movies with the id : ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData);
        return movieData;
    }

    @Delete('/:id')
    remove(@Param("id") movieId:string) {
        return `deletes a movie with id : ${movieId}`;
    }

    @Patch('/:id')
    patch(@Param("id") movieId:string, @Body() updateData) {
        return {
                updateMovie: movieId,
                ...updateData
            };
    }


}
