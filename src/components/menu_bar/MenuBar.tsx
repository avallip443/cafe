import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";

export default function MenuSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Bars3Icon className="w-8 text-black" />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-1/4 bg-(--beige) shadow-lg transform transition-transform duration-300 text-black">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">cafe grenouille</h2>
            <button onClick={() => setIsOpen(!isOpen)}>X</button>
          </div>

          <div className="py-12">
            <ul className="space-y-4">
              <li className="text-lg"><a href="/">home</a></li>
              <li className="text-lg"><a href="/menu">menu</a></li>
              <li className="text-lg"><a href="/about">about</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
