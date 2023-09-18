import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon, RootState } from '../../types/types';

interface PokemonState {
  selectedPokemon: Pokemon | null;
}

const initialState: PokemonState = {
  selectedPokemon: null,

};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<Pokemon | null>) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;

export const selectSelectedPokemon = (state: RootState) =>
  state.pokemon.selectedPokemon;