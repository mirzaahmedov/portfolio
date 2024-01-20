"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { links } from "@/lib/data";

declare global {
  interface Window {
    isNavigationPressed: boolean;
  }
}

function Header() {
  const [activeSection, setActiveSection] = useState("#home");
  const params = useParams();

  useEffect(() => {
    const handleScrollEnd = () => {
      window.isNavigationPressed = false;
    };

    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);
  useEffect(() => {
    setActiveSection(window.location.hash);
  }, [params]);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white 
        border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map(({ name, hash }) => (
            <motion.li
              key={hash}
              className="relative h-3/4 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={hash}
                className={twMerge(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-800 transition-colors",
                  activeSection === hash && "text-gray-800",
                )}
                onClick={() => (window.isNavigationPressed = true)}
              >
                {name}

                {activeSection === hash ? (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="bg-black/5 rounded-full absolute inset-0 -z-10"
                  ></motion.span>
                ) : null}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
