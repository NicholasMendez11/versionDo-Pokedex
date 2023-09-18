import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonReducer';
import authReducer from './reducers/authReducer';
import favoritesReducer from './reducers/favoritesReducer';
// import favoritesReducer from './reducers/favoritesReducer';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    auth: authReducer,
    favorites:favoritesReducer
    // favorites: favoritesReducer,
  },
});

export default store;