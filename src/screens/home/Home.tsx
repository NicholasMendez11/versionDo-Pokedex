import usePokemones from "../../hooks/usePokemonAPI";
import { Pokemon } from "../../types/types";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useEffect } from "react";
import {
  CustomCard,
  Footer,
  Header,
  PokemonDetails,
  ScrollButtom,
} from "../../components";
function Home() {
  const { pokemones, masPokemones, verMas, searchPokemon } = usePokemones();
  useAuthentication();
  useEffect(() => {
    searchPokemon("1");
  }, []);
  return (
    <div className="bg-white">
      <Header />
      <main className="my-8">
        <div className="container mx-auto px-6">
          <PokemonDetails />
          <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">Pokemons</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {pokemones.map((pokemon: Pokemon, index: number) => (
                <div key={index}>
                  <CustomCard
                    id={pokemon.id}
                    imagen={pokemon.imagen}
                    nombre={pokemon.nombre}
                    abilities={pokemon.abilities}
                    stats={pokemon.stats}
                    types={pokemon.types}
                  />
                </div>
              ))}
            </div>
            <button onClick={masPokemones}>
              {verMas ? "Ver mas" : "Estos son todos los pokemons"}
            </button>
          </div>
        </div>
        <ScrollButtom />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
