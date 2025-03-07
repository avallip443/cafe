import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="heading">
        <div id="menu-dropdown"></div>
        <h1 className="mt-3">cafe grenouille</h1>
      </div>

      <div>
        <div className="h-64 md:h-150 bg-[url('images/cafe_landing.jpg')] bg-cover bg-center mt-3"></div>
      </div>

      <div id="menu" className="mt-10 flex justify-between items-center gap-4">
        <div className="h-64 md:h-150 w-1/2 bg-[url('images/coffee_1.png')] bg-cover bg-center"></div>
        <div className="h-64 md:h-150 w-1/2 bg-red-500 flex flex-col justify-center items-center">
          <h5 className="text-xl font-bold mb-4">cafe grenouille</h5>
          <p className="mb-2">123 React Rd, Toronto, CAN</p>
          <a href="" className="underline hover:font-semibold">
            view on google maps
          </a>
        </div>
      </div>

      <div id="hours" className="mt-10 flex justify-between items-center gap-4">
        <div className="h-64 md:h-150 w-1/2 bg-red-500 flex flex-col justify-center items-center">
          <h5 className="text-xl font-bold mb-4">menu</h5>
          <a href="" className="mb-2 underline hover:font-semibold">
            view our cafe and brunch menu
          </a>
          <p>visit us in person and discover our weekly special!</p>
        </div>
        <div className="h-64 md:h-150 w-1/2 bg-[url('images/coffee_2.png')] bg-cover bg-center"></div>
      </div>

      <div id="about" className="mt-10"></div>
      <div id="reservations"></div>
    </div>
  );
};

export default Home;
