import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setPokemon } from "../app/reducers/pokemonReducer";
import { toast } from "react-hot-toast";
import { Pokemon } from "../types/types";

const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

/*En este proyecto específico con una API sencilla, opté por no implementar el Principio de Inversión de Dependencia (DIP).
 La razón detrás de esta decisión es que, dada la simplicidad de la API, Consideré que introducir una abstracción para las llamadas HTTP 
 y aplicar el DIP podría haber agregado complejidad innecesaria al código.

 En una situación más compleja o en un proyecto más grande, definitivamente consideraría la implementación del DIP. 
 Esto proporcionaría una mayor modularidad y flexibilidad al permitir cambiar la librería de llamadas HTTP sin afectar significativamente 
 el código existente.
*/

function usePokemones() {
  const [pokemones, setPokemones] = useState<Pokemon[]>([]);
  const [siguienteUrl, setSiguienteUrl] = useState<string>("");
  const [verMas, setVerMas] = useState<boolean>(true);
  const dispatch = useDispatch();

  // Función para obtener los detalles de un Pokémon
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
      // Si no es la carga inicial, se envía la información del Pokémon al store
      !firstLoad && dispatch(setPokemon(pokemonInfo));
      return pokemonInfo;
    } catch (error) {
      // Si ocurre un error, se muestra una notificación
      !firstLoad && toast.error("Pokemon not found");
    }
  };

  // Función para obtener una lista de Pokémones
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
      // Si ocurre un error, se muestra una notificación
      toast.error("Error fetching pokemones");
    }
  };
  // Función para obtener los Pokémones iniciales
  const obtenerPokemones = async () => {
    const { next, newPokemones } = await getPokemones();
    setPokemones(newPokemones);
    setSiguienteUrl(next);
  };
  // Función para obtener más Pokémones
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

  // Función para buscar un Pokémon por su nombre
  const searchPokemon = async (busqueda: string) => {
    const url = `${URL_ENDPOINT}${busqueda.toLocaleLowerCase()}`;
    return await fetchPokemon(url);
  };

  // Se obtienen los Pokémones iniciales al cargar el componente
  useEffect(() => {
    obtenerPokemones();
  }, []);

  return { pokemones, masPokemones, verMas, searchPokemon };
}

export default usePokemones;
