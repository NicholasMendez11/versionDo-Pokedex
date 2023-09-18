function Pokeballs({}) {
  const items = Array.from({ length: 10 }, (_, index) => index);
  return (
    <ul className="circles">
      {items.map((item) => (
        <li
          className="flex justify-center items-center text-red-700"
          key={item}
        >
          <div className="absolute left-0 top-0 border-black border-b-2 h-[50%] w-[100%] bg-red-600"></div>
        </li>
      ))}
    </ul>
  );
}

export default Pokeballs;
