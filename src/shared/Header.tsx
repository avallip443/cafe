import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";

const Header: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-black/40 flex justify-center transition-transform duration-300 shadow-md 
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="w-full flex justify-between items-center py-2 px-6">
        <div>
          <Bars3Icon
            className="w-6 md:w-8"
          />
        </div>
        <div className="w-auto">
          <ul
            className="flex font-semibold justify-between gap-12 text-sm md:text-xl"
          >
            <li className="md:px-3 hover:text-(--green)">
              <a href="/">home</a>
            </li>
            <li className="md:px-3 hover:text-(--green)">
              <a href="/menu">menu</a>
            </li>
            <li className="md:px-3 hover:text-(--green)">
              <a href="/about">about</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
