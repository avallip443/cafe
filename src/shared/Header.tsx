import React, { useState, useEffect } from "react";

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
      className={`fixed w-full top-0 z-50 bg-black/70 flex justify-center transition-transform duration-300 shadow-md 
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="w-full flex justify-between items-center py-2 px-6">
        <a href="/">
          <img
            src="/logos/cafe-logo-white.png"
            alt="Cafe Logo"
            className="w-10 md:w-18"
          />
        </a>
        <div className="w-auto">
          <ul className="flex  justify-between gap-12 text-sm md:text-2xl">
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
