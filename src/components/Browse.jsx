import React from 'react'
import Header from './Header'
import useNowPalyingMovies from '../hooks/useNowPalyingMovies'
import MainContainer from './mainContainer';
import SecondoryConatainer from './SecondoryConatainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

   useNowPalyingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpComingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondoryConatainer/>
    </div>
  )
}

export default Browse
