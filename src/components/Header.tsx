import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { logout } from "../app/reducers/authReducer";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { RootState } from "../types/types";
import closePokeBall from "../assets/bag.png";
import brand from "../assets/brand.png";
import Lottie from "lottie-react";
import empty from "../assets/empty.json";
import { CustomTile } from ".";

export default function Header({}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const catched = useSelector(
    (state: RootState) => state.favorites.favoritePokemons
  );

  const handleLogOut = () => {
    dispatch(logout());
  };

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <header>
      <Drawer
        className="p-5"
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <h1 className="text-center mt-10">PokeBag</h1>
        {catched.length > 0 ? (
          catched.map((pokemon, index) => (
            <CustomTile
              index={index + 1}
              name={pokemon.nombre}
              type={pokemon.types[0]}
              key={index}
            />
          ))
        ) : (
          <>
            <Lottie
              animationData={empty}
              loop={true}
              className="h-80 w-80 rounded-md object-contain max-w-lg mx-auto"
            />
            <p className="text-center">No hay nada en tu mochila</p>
          </>
        )}
      </Drawer>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <button className="mx-1 text-sm " onClick={handleLogOut}>
              Cerrar sesion
            </button>
          </div>
          <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            <img src={brand} className="h-20 w-96" />
          </div>
          <div className="flex items-center justify-end w-full">
            <button
              className="text-gray-600 focus:outline-none mx-4 sm:mx-0 hidden md:flex"
              onClick={toggleDrawer(true)}
            >
              {/* Imagen de favs */}
              <img
                className={`w-12 ${catched.length > 0 && "animate-bounce"}`}
                src={closePokeBall}
                alt=""
              />
            </button>
            <div className="flex sm:hidden ">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500 "
                aria-label="toggle menu"
                onClick={toggleDrawer(true)}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-6 max-w-lg mx-auto">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
