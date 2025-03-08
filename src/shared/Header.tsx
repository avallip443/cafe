import React from "react";
import MenuSidebar from "../components/menu_bar/MenuBar";

const Header: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      <div id="menu-dropdown" className="absolute left-4 top-3">
        <MenuSidebar />
      </div>
      <h1 className="my-4 text-black text-xl font-medium">cafe grenouille</h1>
    </div>
  );
};

export default Header;