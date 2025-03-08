import React from "react";
import Reservations from "../components/reservations/Reservations";

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden p-2 pt-0">
      <div
        id="landing-image"
        className="h-64 md:h-150 bg-[url('images/cafe_landing.jpg')] bg-cover bg-center"
      ></div>

      <div id="menu" className="mt-10 flex justify-between items-center gap-4">
        <div className="h-64 md:h-150 w-1/2 bg-[url('images/coffee_1.png')] bg-cover bg-center"></div>
        <div className="h-64 md:h-150 w-1/2 bg-(--green) text-black flex flex-col justify-center items-center">
          <h5 className="text-3xl font-bold mb-6">cafe grenouille</h5>
          <p className="mb-4">123 react rd, toronto, canada</p>
          <p className="font-semibold">tuesday-sunday, 8am-4pm</p>
        </div>
      </div>

      <div id="hours" className="mt-10 flex justify-between items-center gap-4">
        <div className="h-64 md:h-150 w-1/2 bg-(--yellow) text-black flex flex-col justify-center items-center">
          <h5 className="text-3xl font-bold mb-6">menu</h5>
          <p className="mb-4">
            visit us in person and discover our weekly special!
          </p>
          <a href="/menu" className="underline font-semibold hover:font-bold">
            view our cafe and brunch menu
          </a>
        </div>
        <div className="h-64 md:h-150 w-1/2 bg-[url('images/coffee_2.png')] bg-cover bg-center"></div>
      </div>

      <div
        id="about"
        className="mt-32 flex flex-col justify-center items-center"
      >
        <h4 className="text-black text-xl mb-4 font-bold hover:text-(--green-accent)">
          Parisan brunch and cafe
        </h4>
        <p className="text-black w-3/4">
          Welcome to Cafe Grenouille, a charming French eatery in the heart of
          Toronto. We proudly serve everything from delicious pastries, richly
          crafted coffee, and classic brunch dishes. With locally sourced
          ingredients and a passion for great food, our cafe brings the rich
          flavours of Paris right to your table!
        </p>
      </div>

      <Reservations />

      <div id="reviews" className="mt-32 flex justify-center">
        <div className="flex w-[95%] text-black">
          <div className="w-1/3 border-2 border-(--green-accent) border-r-0 rounded-tl-2xl rounded-bl-2xl px-4 py-12 hover:border-none hover:bg-(--green-accent) hover:text-(--beige)">
            <h5 className="text-lg font-semibold mb-3">Toronto Star</h5>
            <p>
              "Cafe Grenouille is an absolute gem in the heart of Toronto... the
              aroma and rich food transports you straight to the tables of
              Paris!"
            </p>
          </div>
          <div className="w-1/3 border-2 border-(--green-accent) border-r-0 px-4 py-12 hover:border-none hover:bg-(--green-accent) hover:text-(--beige)">
            <h5 className="text-lg font-semibold mb-3">BlogTO</h5>
            <p>
             "It’s rare to find a café that truly masters both coffee and
              cuisine, but Cafe Grenouille does exactly that. Highly recommend
              for coffee lovers and brunch enthusiasts alike!"
            </p>
          </div>
          <div className="w-1/3 border-2 border-(--green-accent) rounded-tr-2xl rounded-br-2xl px-4 py-12 hover:border-none hover:bg-(--green-accent) hover:text-(--beige)">
            <h5 className="text-lg font-semibold mb-3">Toronto Life</h5>
            <p>
              "Cafe Grenouille is redefining brunch with its take on
              French classics. Whether you're a local or just visiting, this
              café deserves a top spot on your bucket list!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
