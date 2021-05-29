import { createSlice } from '@reduxjs/toolkit';

const initialeState = {
    movies: []
}

const movieSlice = createSlice({
    name:'movie',
    initialeState,
    reducer: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
})

export const {setMovies} = movieSlice.actions

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;