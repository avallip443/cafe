import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      <div id="menu-dropdown" className="absolute left-4 top-3">
        <Bars3Icon className="w-8 text-black"/>
      </div>
      <h1 className="my-4 text-black text-xl font-medium">cafe grenouille</h1>
    </div>
  );
};

export default Header;