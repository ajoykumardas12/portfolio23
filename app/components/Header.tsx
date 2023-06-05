import Link from "next/link";

import { Caveat } from "next/font/google";

const caveat = Caveat({ 
    subsets: ["latin"],
    variable:  "--font-caveat"
  });

export default function Header() {
    return (
        <header className="flex justify-between px-20 py-6">
            <div className={`${caveat.className} text-2xl font-bold`}>AJOY</div>
            <nav>
                <ul className="flex gap-10">
                    <li>
                        <Link href="#">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

