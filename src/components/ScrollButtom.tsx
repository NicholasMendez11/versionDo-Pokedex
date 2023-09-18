import { motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";
import { scrollToTop } from "../utils/functions";
import { useEffect, useState } from "react";

//Pudiese poner props para que sea mas dinamico y mas extensible, pero para los fines practicos de esta prueba, es funcional
function ScrollButtom() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.button
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: isButtonVisible ? 1 : 0,
        y: isButtonVisible ? 0 : 100,
      }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }} // Duración de transición más larga
      onClick={() => scrollToTop()}
      className={`flex fixed bottom-10 right-14 text-white bg-red-600 w-20 h-20 text-2xl rounded-full items-center justify-center`}
    >
      <AiOutlineArrowUp />
    </motion.button>
  );
}

export default ScrollButtom;
