import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();

  return (
    <header className="header">
      <Link
        href="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient-text">RR</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link
          className={path == "/about" ? "text-blue-500" : "text-black"}
          href="/about"
        >
          About
        </Link>
        <Link
          className={path == "/projects" ? "text-blue-500" : "text-black"}
          href="/projects"
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
