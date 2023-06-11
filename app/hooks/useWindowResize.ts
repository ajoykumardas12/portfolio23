"use client";
import { useEffect, useState } from "react";

const useWindowReSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowReSize;
