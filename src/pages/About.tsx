import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full p-4 flex justify-center">
      <div className="max-w-7xl flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl text-black mb-2 md:mb-4 px-4">
          about cafe grenouille
        </h1>
        <h2 className="text-lg md:text-xl text-(--green-accent) px-4">
          we love frogs and tasty pastries
        </h2>

        <div
          id="landing-image"
          className="w-[88vw] md:w-full h-64 md:h-118 mt-4 bg-cover bg-center bg-[url('images/cafe_landing1.jpg')]"
        ></div>

        <div className="mt-4 md:mt-16 sm:w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-2">
          <div className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-(--yellow) text-black flex flex-col justify-center items-center p-8 md:p-12">
            <h5 className="text-xl md:text-2xl font-semibold mb-4">we love making (and eating) good food</h5>
            <p>we've been serving toronto brunch since 2025</p>
          </div>
          <div
            className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/coffee_1.png)`,
            }}
          ></div>
        </div>

        <div className="mt-14 md:mt-16 flex flex-col justify-center items-center px-4">
          <h4 className="text-(--beige) text-lg md:text-xl mb-4 w-70 md:w-92 py-2 font-bold bg-(--green-accent)">
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
      </div>
    </div>
  );
};

export default About;
