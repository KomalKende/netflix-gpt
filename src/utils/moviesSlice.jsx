

import {createSlice} from '@reduxjs/toolkit'


const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upComingMovies : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularVideo : (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedVideo : (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpComingMovies : (state, action) => {
            state.upComingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularVideo, addTopRatedVideo, addUpComingMovies } = moviesSlice.actions

export default moviesSlice.reducer