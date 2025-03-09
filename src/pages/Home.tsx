import React, { useState, useEffect } from "react";
import Reservations from "../components/reservations/Reservations";

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex % 3) + 1);
      }, 100);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden p-4 pt-0 flex justify-center">
      <div className="max-w-7xl flex flex-col items-center justify-center">
        <div
          id="landing-image"
          className="w-[88vw] md:w-full h-64 md:h-148 bg-cover bg-center bg-[url('images/cafe_landing1.jpg')]"
        ></div>

        <div
          id="menu"
          className="mt-4 md:mt-16 sm:w-full flex flex-col-reverse md:flex-row justify-between items-center gap-2"
        >
          <div className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-[url('images/coffee_1.png')] bg-cover bg-center"></div>
          <div className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-(--green) text-black flex flex-col justify-center items-center p-12">
            <h5 className="text-xl md:text-2xl font-semibold mb-6">
              cafe grenouille
            </h5>
            <p className="mb-4 text-sm md:text-lg">
              123 react rd, toronto, canada
            </p>
            <p className="font-medium underline text-sm md:text-lg">
              tuesday to sunday, 8am-4pm
            </p>
          </div>
        </div>

        <div
          id="hours"
          className="mt-4 md:mt-16 sm:w-full flex flex-col md:flex-row justify-between items-center gap-2"
        >
          <div className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-(--yellow) text-black flex flex-col justify-center items-center p-12">
            <h5 className="text-xl md:text-2xl font-semibold mb-6">menu</h5>
            <p className="mb-4 text-sm md:text-lg">
              visit us in person and discover our weekly special!
            </p>
            <a
              href="/menu"
              className="underline font-medium hover:font-bold text-sm md:text-lg"
            >
              view our cafe and brunch menu
            </a>
          </div>
          <div className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-[url('images/coffee_2.png')] bg-cover bg-center"></div>
        </div>

        <div
          id="about"
          className="mt-16 md:mt-32 flex flex-col justify-center items-center"
        >
          <h4 className="text-(--beige) text-lg md:text-xl mb-4 w-72 md:w-92 py-2 font-bold bg-(--green-accent)">
            parisan brunch and cafe
          </h4>
          <p className="text-black text-sm md:text-lg w-[86vw] md:w-3/4">
            Welcome to Cafe Grenouille, a charming French eatery in the heart of
            Toronto. We proudly serve everything from delicious pastries, richly
            crafted coffee, and classic brunch dishes. With locally sourced
            ingredients and a passion for great food, our cafe brings the rich
            flavours of Paris right to your table!
          </p>
        </div>

        <Reservations />

        <div id="reviews" className="mt-16 md:mt-32 justify-center md:flex">
          <div className="flex flex-col md:flex-row text-black h-56">
            <div className="md:w-1/3 flex flex-col items-center justify-between text-(--green-accent) hover:text-black border border-(--green-accent) md:border-r-0 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl px-4 py-6 md:py-12 hover:bg-(--yellow)">
              <p className="text-sm md:text-lg font-semibold">
                "Cafe Grenouille is an absolute gem in the heart of Toronto!"
              </p>
              <img
                src="/logos/toronto-life-logo.svg"
                className="mt-4 w-24 md:w-22"
              />
            </div>

            <div className="md:w-1/3 flex flex-col items-center justify-between text-(--green-accent) hover:text-black border border-(--green-accent) md:border-r-0 px-4 py-6 md:py-12 hover:bg-(--yellow)">
              <p className="text-sm md:text-lg font-semibold">
                "For coffee lovers and brunch enthusiasts alike!"
              </p>
              <img
                src="/logos/the-globe-and-mail-logo.svg"
                className="mt-4 h-4 md:h-4"
              />
            </div>

            <div className="md:w-1/3 flex flex-col items-center justify-between text-(--green-accent) hover:text-black border border-(--green-accent) md:rounded-tr-2xl rounded-br-2xl rounded-bl-2xl md:rounded-bl-none px-4 py-6 md:py-12 hover:bg-(--yellow)">
              <p className="text-sm md:text-lg font-semibold">
                "This café deserves a top spot on your bucket list!"
              </p>
              <img src="/logos/blogto-logo.svg" className="mt-4 w-24 md:w-22" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
