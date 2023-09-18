// @ts-ignore
import { RootState as DefaultRootState } from '@reduxjs/toolkit';

export interface Pokemon {
  id: number
  nombre: string
  imagen: string
  abilities: string[]
  stats: Stat[]
  types: string[]
}

export interface Stat {
  name: string
  base: number
}

  export interface RootState extends DefaultRootState {
    pokemon: {
      selectedPokemon: Pokemon | null;
    };
    favorites: {
      favoritePokemons: Pokemon[];
    };
    auth:{
      user:boolean
    }
  }