import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon, RootState } from '../../types/types';

interface FavoritesState {
  favoritePokemons: Pokemon[];
}

const initialState: FavoritesState = {
  favoritePokemons: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    catchPokemon: (state, action: PayloadAction<Pokemon>) => {
      const pokemon = action.payload;
      if (!state.favoritePokemons.includes(pokemon)) {
        state.favoritePokemons.push(pokemon);
      }
    },
    freePokemon: (state, action: PayloadAction<Pokemon>) => {
      const pokemon = action.payload;
      const index = state.favoritePokemons.findIndex(
        (p) => p.id === pokemon.id
      );
      if (index !== -1) {
        state.favoritePokemons.splice(index, 1);
      }
    },
  },
});

export const { catchPokemon, freePokemon } = favoritesSlice.actions;
export default favoritesSlice.reducer;

export const selectFavoritePokemons = (state: RootState) =>
  state.favorites.favoritePokemons;