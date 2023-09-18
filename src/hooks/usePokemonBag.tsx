import { useSelector, useDispatch } from "react-redux";
import { catchPokemon, freePokemon } from "../app/reducers/favoritesReducer";
import usePokemones from "./usePokemonAPI";
import { scrollToTop } from "../utils/functions";
import { Pokemon, RootState } from "../types/types";
import openPokeball from "../assets/openpokeball.png";
import closePokeball from "../assets/closepokeball.png";

function usePokemonBag(pokemon: Pokemon) {
  const dispatch = useDispatch();
  const favPokemons = useSelector(
    (state: RootState) => state.favorites?.favoritePokemons
  );
  const { searchPokemon } = usePokemones();

  const isFav = favPokemons?.some((p) => p.id === pokemon.id);
  const img = isFav ? closePokeball : openPokeball;

  const handleCatch = () => {
    isFav ? dispatch(freePokemon(pokemon)) : dispatch(catchPokemon(pokemon));
  };

  const handleSelectPokemon = () => {
    searchPokemon(pokemon.id.toString());
    scrollToTop();
  };

  return {
    isFav,
    img,
    handleCatch,
    handleSelectPokemon,
  };
}

export default usePokemonBag;
