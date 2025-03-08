import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full p-2 flex flex-col items-center">
      <h1 className="text-4xl text-black mt-10 mb-4">about cafe grenouille</h1>
      <h2 className="text-xl text-red-500">we love frogs and tasty pastries</h2>

      <div
        id="landing-image"
        className="h-48 md:h-64 w-9/10 bg-[url('images/cafe_landing.jpg')] bg-cover bg-center mt-10"
      ></div>

      <div className="mt-10 w-full flex justify-between items-center gap-4">
        <div className="h-64 md:h-150 w-1/2 bg-red-500 flex flex-col justify-center items-center">
          <h5 className="text-xl font-bold mb-4">est. 2025</h5>
          <p className="mb-2 underline hover:font-semibold">
            we love making (and eating) good food
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nihil iste</p>
        </div>
        <div className="h-64 md:h-150 w-1/2 bg-[url('images/coffee_2.png')] bg-cover bg-center"></div>
      </div>

      <div
        className="mt-20 flex flex-col justify-center items-center"
      >
        <h4 className="text-black text-lg mb-4 font-bold">
          Lorem ipsum dolor sit amet consectetur.
        </h4>
        <p className="text-black w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nihil iste, magnam tenetur et aliquid neque consequuntur earum fuga.
          Quibusdam vel similique hic nemo ipsum, reiciendis eos magnam
          voluptatibus dicta!
        </p>
      </div>
    </div>
  );
};

export default About;
