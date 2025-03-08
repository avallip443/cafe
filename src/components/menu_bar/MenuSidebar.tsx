import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";

export default function MenuSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Bars3Icon className="w-6 md:w-8 text-black" />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-8/10 sm:w-1/4 bg-(--beige) shadow-lg transform transition-transform duration-300 text-black">
          <div className="flex justify-between items-center p-4 border-b-3 border-(--green) bg-(--yellow)">
            <h2 className="text-md md:text-xl font-semibold text-center"><a href="/">cafe grenouille</a></h2>
            <button className="text-xl hover:text-(--green-accent) hover:font-bold" onClick={() => setIsOpen(!isOpen)}>X</button>
          </div>

          <div className="py-8 sm:py-12">
            <ul className="space-y-5">
              <li className="text-md md:text-lg hover:text-(--green-accent) hover:font-semibold"><a href="/">home</a></li>
              <li className="text-md md:text-lg hover:text-(--green-accent) hover:font-semibold"><a href="/menu">menu</a></li>
              <li className="text-md md:text-lg hover:text-(--green-accent) hover:font-semibold"><a href="/about">about</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
