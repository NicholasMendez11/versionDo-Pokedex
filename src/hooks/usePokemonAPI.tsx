import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setPokemon } from "../app/reducers/pokemonReducer";
import { toast } from "react-hot-toast";
import { Pokemon } from "../types/types";

const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

function usePokemones() {
  const [pokemones, setPokemones] = useState<Pokemon[]>([]);
  const [siguienteUrl, setSiguienteUrl] = useState<string>("");
  const [verMas, setVerMas] = useState<boolean>(true);
  const dispatch = useDispatch();

  const fetchPokemon = async (url: string, firstLoad = false) => {
    try {
      const response = await axios.get(url);
      const poke = response.data;

      const abilities = poke.abilities.map((a: any) => a.ability.name);
      const stats = poke.stats.map((s: any) => ({
        name: s.stat.name,
        base: s.base_stat,
      }));
      const types = poke.types.map((t: any) => t.type.name);

      const pokemonInfo = {
        id: poke.id,
        nombre: poke.name,
        imagen:
          poke.sprites.other.dream_world.front_default ||
          poke.sprites.front_default,
        abilities,
        stats,
        types,
      };

      !firstLoad && dispatch(setPokemon(pokemonInfo));
      return pokemonInfo;
    } catch (error) {
      !firstLoad && toast.error("Pokemon not found");
    }
  };

  const getPokemones = async (url = URL_DEFAULT) => {
    try {
      const response = await axios.get(url);
      const listaPokemones = response.data;
      const { next, results } = listaPokemones;

      const newPokemones = await Promise.all(
        results.map((pokemon: any) => fetchPokemon(pokemon.url, true))
      );

      return { next, newPokemones };
    } catch (error) {
      toast.error("Error fetching pokemones");
    }
  };

  const obtenerPokemones = async () => {
    const { next, newPokemones } = await getPokemones();
    setPokemones(newPokemones);
    setSiguienteUrl(next);
  };

  const masPokemones = async () => {
    if (siguienteUrl) {
      const { next, newPokemones } = await getPokemones(siguienteUrl);
      setPokemones((prev) => [...prev, ...newPokemones]);
      next === null && setVerMas(false);
      setSiguienteUrl(next);
    } else {
      setVerMas(false);
    }
  };

  const searchPokemon = async (busqueda: string) => {
    const url = `${URL_ENDPOINT}${busqueda.toLocaleLowerCase()}`;
    return await fetchPokemon(url);
  };

  useEffect(() => {
    obtenerPokemones();
  }, []);

  return { pokemones, masPokemones, verMas, searchPokemon };
}

export default usePokemones;
