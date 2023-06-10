import Link from "next/link";

import { Eagle_Lake, Space_Grotesk, Fira_Sans } from "next/font/google";

const eagleLake = Eagle_Lake({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
});

function Header() {
  return (
    <header className="fixed z-10 w-full h-20 flex items-center justify-between px-20 bg-darkest/90 backdrop-blur-xl shadow-md">
      <div
        className={`${eagleLake.className} text-2xl font-bold tracking-widest text-highlight`}
      >
        AJOY
      </div>
      <nav className="">
        <ul className="flex gap-10">
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
      </nav>
    </header>
  );
}

export default Header;
