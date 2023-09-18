import { useState } from "react";
import usePokemones from "../hooks/usePokemonAPI";
import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
export default function SearchBar({}) {
  const [searchValue, setSearchValue] = useState("");
  const { searchPokemon } = usePokemones();

  const handeInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = () => {
    searchPokemon(searchValue);
  };
  return (
    <TextInput
      icon={HiSearch}
      id="email4"
      placeholder="Pokemon Name"
      required
      type="name"
      onChange={(e) => handeInputEvent(e)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSubmit();
        }
      }}
    />
  );
}
