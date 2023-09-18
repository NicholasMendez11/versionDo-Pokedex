import { Badge } from "flowbite-react";
import closePokeball from "../assets/closepokeball.png";
type props = {
  name: string;
  type: string;
  index: number;
};
function CustomTile({ name, type, index }: props) {
  return (
    <div className="p-5 bg-white rounded-lg flex items-center justify-evenly space-x-8 gap-6">
      <div className="flex-1 flex justify-evenly items-center gap-3">
        {index}. <p className="capitalize">{name}</p>
        <Badge>{type}</Badge>
        <img src={closePokeball} alt="pokeball" className="h-10" />
      </div>
    </div>
  );
}

export default CustomTile;
