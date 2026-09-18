import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favoritesSlice';
import filtersReducer from './filtersSlice';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: { 
        favorites: favoritesReducer,
        filters: filtersReducer,
        auth: authReducer,
},
})