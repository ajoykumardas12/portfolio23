"use client";
import Link from "next/link";

import { Eagle_Lake, Space_Grotesk, Fira_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import useWindowReSize from "../hooks/useWindowResize";

const eagleLake = Eagle_Lake({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
});

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    if (isHamburgerOpen) {
      body?.classList.add("overflow-hidden");
      main?.classList.add("blur-sm");
    } else {
      body?.classList.remove("overflow-hidden");
      main?.classList.remove("blur-sm");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHamburgerOpen]);

  const toggleIsHamburgerOpen = () => {
    setIsHamburgerOpen((prevValue) => {
      return !prevValue;
    });
  };

  const { width } = useWindowReSize();

  return (
    <header
      className={`fixed z-10 w-full h-20 flex items-center justify-between px-6  lg:px-20 bg-darkest/90 backdrop-blur-xl shadow-sm`}
    >
      <div
        className={`${eagleLake.className} text-2xl font-bold tracking-widest text-highlight z-10 `}
      >
        AJOY
      </div>
      <nav className="">
        <div
          className={`fixed left-[20%] right-0 top-0 h-screen flex justify-center items-center px-20 bg-darkest ${
            !isHamburgerOpen && "translate-x-full"
          } transition-transform md:relative md:block md:px-0 md:h-auto md:left-0 md:translate-x-0`}
        >
          <ul className="h-[55%] w-full flex flex-col justify-between items-center md:flex-row  md:gap-6 lg:gap-10 xl:gap-12">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#projects" className="">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="#">Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
      <button
        className={`hamburger-menu md:hidden fixed z-10 ${
          isHamburgerOpen ? "hamburger-open" : ""
        }`}
        onClick={toggleIsHamburgerOpen}
      >
        <div
          className={`first ${isHamburgerOpen ? "hamburger-open" : ""}`}
        ></div>
        <div className="middle"></div>
        <div className="last"></div>
      </button>
    </header>
  );
}

export default Header;
