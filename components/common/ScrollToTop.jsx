import React, { useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollToTopButton = document.querySelector(".scroll-to-top");

      if (scrollTop > 200) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  }, []);

  return (
    <button
      onClick={handleClick}
      className="scroll-to-top bg-yellow-500 text-white fixed bottom-5 right-5 rounded-full inline-block w-12 h-12 hover:bg-yellow-600 ease-linear duration-300"
    >
      <FaArrowAltCircleUp className="inline-block text-2xl" />
    </button>
  );
};

export default ScrollToTop;
