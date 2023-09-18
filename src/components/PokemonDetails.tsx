import { useSelector } from "react-redux";
import { RootState } from "../types/types";
import { Badge } from "flowbite-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import usePokemonBag from "../hooks/usePokemonBag";
import Lottie from "lottie-react";
import yet from "../assets/yet.json";
export default function PokemonDetails({}) {
  const selectedPokemon = useSelector(
    (state: RootState) => state.pokemon.selectedPokemon
  );
  const { isFav, handleCatch } = usePokemonBag(selectedPokemon!);

  return (
    <motion.div
      animate={{ opacity: 1 }} // Deslizamiento hacia arriba
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="md:flex md:items-center"
    >
      <div className="w-full h-64 md:w-1/2 lg:h-96">
        {selectedPokemon ? (
          <img
            className="h-full w-full rounded-md object-contain max-w-lg mx-auto"
            src={selectedPokemon?.imagen}
            loading="eager"
            alt="Pokemon pic"
          />
        ) : (
          <Lottie
            animationData={yet}
            loop={true}
            className="h-full w-full rounded-md object-contain max-w-lg mx-auto"
          /> //Cambiar este skeleton por un lottie
        )}
      </div>
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
        {selectedPokemon ? (
          <h3 className="text-gray-700 uppercase text-lg">
            {selectedPokemon?.nombre}
          </h3>
        ) : (
          <Skeleton className="w-40" />
        )}
        {selectedPokemon ? (
          <span className="text-gray-500 mt-3">
            Ataque: {selectedPokemon?.stats[1].base}pts
          </span>
        ) : (
          <Skeleton />
        )}
        <hr className="my-3" />
        {selectedPokemon ? (
          <>
            <div className="mt-2">
              <label className="text-gray-700 text-sm" htmlFor="count">
                Tipos:
              </label>
              <div className="flex items-center mt-1">
                <div className="flex items-center mt-1 gap-2">
                  {selectedPokemon?.types.map((t, index) => (
                    <Badge key={index} className="">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label className="text-gray-700 text-sm" htmlFor="count">
                Abilidades:
              </label>
              <div className="flex items-center mt-1 gap-2">
                {selectedPokemon?.abilities.map((a, index) => (
                  <Badge key={index} className="">
                    {a}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center mt-6">
              <button
                onClick={handleCatch}
                className={`px-8 py-2 ${
                  isFav ? "bg-[#ff6961]" : "bg-[#49D1AF]"
                } text-white text-sm font-medium rounded transition-all duration-500`}
              >
                {isFav ? "Liberar" : "Capturar"}
              </button>
            </div>
          </>
        ) : (
          <Skeleton count={6} />
        )}
      </div>
    </motion.div>
  );
}
