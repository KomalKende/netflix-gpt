import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 p-2 mb-2'>
      <img src={IMG_CDN_URL + posterPath} alt="movie" />
    </div>
  )
}

export default MovieCard
