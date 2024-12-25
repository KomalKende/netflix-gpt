import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondoryConatainer = () => {

  const movies = useSelector(store => store.movies)

  return (
    movies.nowPlayingMovies && (
    <div className='bg-black pb-4'>
      <div className='-mt-56 relative z-20 pl-12'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Upcoming Movies" movies={movies.upComingMovies} />
      </div>
    </div>
    )
  )
}

export default SecondoryConatainer
