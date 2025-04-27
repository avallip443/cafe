import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex justify-center items-center w-full">
        <div className="w-full bg-(--dark-green)/60 text-black flex flex-col items-center py-24 text-white">
          <h4 className="text-2xl mb-4 font-bold">reservations</h4>
          <p className="w-4/5">book a table or join the waitlist</p>
          <div className="flex flex-col md:flex-row w-4/5 md:w-4/5 mt-2 gap-2 md:gap-0">
            <div className="md:w-1/4 bg-gray-400 py-3"># people</div>
            <div className="md:w-1/4 bg-gray-600 py-3">date</div>
            <div className="md:w-1/4 bg-gray-400 py-3">time</div>
            <div className="md:w-1/4 bg-gray-500 py-3">find table</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
