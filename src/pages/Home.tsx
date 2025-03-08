import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden p-2 pt-0">
      <div id="landing-image" className="h-64 md:h-150 bg-[url('images/cafe_landing.jpg')] bg-cover bg-center"></div>

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

      <div
        id="about"
        className="mt-32 flex flex-col justify-center items-center"
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

      <div id="reservations" className="mt-32 flex justify-center items-center">
        <div className="bg-red-500 w-[95%] flex flex-col items-center py-24">
          <h4 className="text-black text-xl mb-4 font-bold">reservations</h4>
          <p>book a table or join the waitlist</p>
          <div className="flex w-4/5 mt-2">
            <div className="w-1/4 bg-gray-400 py-3"># people</div>
            <div className="w-1/4 bg-gray-600 py-3">date</div>
            <div className="w-1/4 bg-gray-400 py-3">time</div>
            <div className="w-1/4 bg-gray-500 py-3">find table</div>
          </div>
        </div>
      </div>

      <div id="reviews" className="mt-32 flex justify-center">
        <div className="flex w-[95%] text-black">
          <div
            id="review1"
            className="border border-red-500 border-r-0 rounded-tl-md rounded-bl-md px-4 py-12"
          >
            <h5>organization 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div
            id="review2"
            className="border border-red-500 border-r-0 px-4 py-12"
          >
            <h5>organization 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div
            id="review3"
            className="border border-red-500 rounded-tr-md rounded-br-md px-4 py-12"
          >
            <h5>organization 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
