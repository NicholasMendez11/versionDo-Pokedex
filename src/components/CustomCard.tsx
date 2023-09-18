import { Pokemon } from "../types/types";
import { Badge } from "flowbite-react";
import { motion } from "framer-motion";
import usePokemonBag from "../hooks/usePokemonBag";

function CustomCard(pokemon: Pokemon) {
  const { isFav, img, handleCatch, handleSelectPokemon } =
    usePokemonBag(pokemon);

  return (
    <motion.div
      animate={{ opacity: 1 }} // Deslizamiento hacia arriba
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`${
        isFav ? "bg-[#ff6961]" : "bg-[#49D1AF]"
      } transition-all duration-500 w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden p-4 flex flex-row hover:cursor-pointer justify-around relative`}
    >
      <div className="flex-col" onClick={handleSelectPokemon}>
        <p className="text-white font-bold capitalize text-lg">
          {pokemon.nombre}
        </p>
        {pokemon.types.map((type) => (
          <Badge className="mt-1 ">{type}</Badge>
        ))}
      </div>
      <div className="flex-col" onClick={handleSelectPokemon}>
        <img
          src={pokemon.imagen}
          alt="pokemon pic"
          loading="eager"
          className="h-32 mt-4 mr-6"
        />
      </div>
      <button
        className="rounded-full absolute bottom-0 right-0 text-white "
        onClick={() => handleCatch()}
      >
        <img className="h-20 w-20" src={img} alt="pokeball" />
      </button>
    </motion.div>
  );
}

export default CustomCard;
