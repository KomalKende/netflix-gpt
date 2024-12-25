import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies)
  return (
    <div className=''>
            <h1 className=' text-xl p-2 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll hide-scrollbar'>
            <div className='flex pb-4'>
                  {
                    movies && movies.length > 0 ?
                    movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
                    : ( <p>No Movies available </p>)
                  }
                </div>
            </div>
        </div>
  )
}

export default MovieList
