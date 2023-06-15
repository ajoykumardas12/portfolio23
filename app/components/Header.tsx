"use client";
import Link from "next/link";

import { Eagle_Lake, Space_Grotesk, Fira_Sans } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import useWindowReSize from "../hooks/useWindowResize";
import useOnClickOutside from "../hooks/useOnOutsideClick";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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

  const { width } = useWindowReSize();

  useEffect(() => {
    if (width > 767) {
      setIsHamburgerOpen(false);
    }
  }, [width]);

  const toggleIsHamburgerOpen = () => {
    setIsHamburgerOpen((prevValue) => {
      return !prevValue;
    });
  };

  // closing hamburger menu on nav links click
  // TODO: unnecessary at >md breakpoints, any better way to do this?
  const navClickHamburgerClose = () => {
    setIsHamburgerOpen(false);
  };

  const navLinkContainerRef = useRef(null);
  const hamburgerRef = useRef(null);

  function onClickOutside() {
    setIsHamburgerOpen(false);
  }

  return (
    <header
      className={`fixed z-10 w-full h-20 flex items-center justify-between px-6  lg:px-20 ${
        isHamburgerOpen ? "bg-darkest" : "bg-darkest/90"
      } backdrop-blur-xl shadow-sm`}
    >
      <div
        className={`${eagleLake.className} text-2xl font-bold tracking-widest text-highlight z-10 `}
      >
        AJOY
      </div>
      <nav className="">
        <div
          ref={navLinkContainerRef}
          className={`${
            spaceGrotesk.className
          } fixed left-[20%] right-0 top-0 h-screen flex justify-center items-center px-20 bg-darkest md:bg-transparent ${
            !isHamburgerOpen && "translate-x-full"
          } transition-transform md:relative md:block md:px-0 md:h-auto md:left-0 md:translate-x-0`}
        >
          <ul className="h-[55%] w-full flex flex-col justify-between items-center md:flex-row  md:gap-5 lg:gap-8 xl:gap-10 text-white/90">
            <li className="nav-link">
              <Link href="/" onClick={navClickHamburgerClose}>
                Home
              </Link>
            </li>
            <li className="nav-link">
              <a href="#projects" onClick={navClickHamburgerClose}>
                Projects
              </a>
            </li>
            <li className="nav-link">
              <a href="#contact" onClick={navClickHamburgerClose}>
                Contact
              </a>
            </li>
            <li className="nav-link">
              <Link href="/blog" onClick={navClickHamburgerClose}>
                Blog
              </Link>
            </li>
            <li className="nav-link">
              <Link
                href="https://drive.google.com/file/d/1TVaILc8M4YYV24AwhdI840jc1PdbI6Jd/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                onClick={navClickHamburgerClose}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
        {/* run useOnOutsideClick hook conditionally */}
        {isHamburgerOpen && (
          <UseOnOutsideClickWrapper
            refObj={navLinkContainerRef}
            exceptionElementRef={hamburgerRef}
            onClickOutside={onClickOutside}
          />
        )}
      </nav>
      <button
        ref={hamburgerRef}
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

interface UseOnOutsideClickWrapperProps {
  refObj: React.RefObject<HTMLElement>;
  exceptionElementRef: React.RefObject<HTMLElement>;
  onClickOutside: () => void;
}
// Wrapper for useOutsideClick hook to be used conditionally
function UseOnOutsideClickWrapper({
  refObj,
  exceptionElementRef,
  onClickOutside,
}: UseOnOutsideClickWrapperProps) {
  useOnClickOutside(refObj, exceptionElementRef, onClickOutside);

  return null;
}

export default Header;
