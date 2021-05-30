import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    // user movie reducer
    movie: movieReducer,
    //use the reducer
    user: userSlice
  },
});
