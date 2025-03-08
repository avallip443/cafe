import React from "react";

const About: React.FC = () => {
  return (
    <div className="mt-32 flex justify-center items-center">
      <div className="bg-(--green) text-black w-[95%] flex flex-col items-center py-24">
        <h4 className="text-2xl mb-4 font-bold">reservations</h4>
        <p>book a table or join the waitlist</p>
        <div className="flex w-4/5 mt-2">
          <div className="w-1/4 bg-gray-400 py-3"># people</div>
          <div className="w-1/4 bg-gray-600 py-3">date</div>
          <div className="w-1/4 bg-gray-400 py-3">time</div>
          <div className="w-1/4 bg-gray-500 py-3">find table</div>
        </div>
      </div>
    </div>
  );
};

export default About;
