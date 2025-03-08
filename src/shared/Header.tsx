import React from "react";
import MenuSidebar from "../components/menu_bar/MenuSidebar";

const Header: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      <div id="menu-dropdown" className="absolute left-4 top-3">
        <MenuSidebar />
      </div>
      <h1 className="my-3 md:my-4 text-md md:text-xl font-medium text-black hover:text-(--green-accent)">
        <a href="/">cafe grenouille</a>
      </h1>
    </div>
  );
};

export default Header;
