import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Reservations from "../components/reservations/Reservations";

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex % 3) + 1);
      }, 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden p-4 pt-0 flex justify-center">
      <div className="max-w-6xl flex flex-col items-center justify-center">
        <div
          id="landing-image"
          className="w-screen h-64 md:h-152 bg-cover bg-center bg-[url('images/cafe_landing1.jpg')] flex flex-col justify-end items-center md:items-end pb-4 md:pb-10 md:pr-10"
        >
          <p className="text-lg md:text-5xl bg-green-800/80 p-4 rounded-xl">
            parisan brunch and cafe
          </p>
          <p className="text-xs md:text-2xl">
            a slice of paris in the heart of toronto
          </p>
        </div>

        <motion.div
          id="menu"
          className="mt-4 md:mt-16 sm:w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/brunch_${currentIndex}.png)`,
            }}
          ></div>
          <div className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-(--green) text-black flex flex-col justify-center items-center p-12">
            <h5 className="text-xl md:text-2xl font-semibold mb-6">
              cafe grenouille
            </h5>
            <p className="mb-4 text-sm md:text-lg">123 react rd, toronto, canada</p>
            <p className="font-medium underline text-sm md:text-lg">
              tuesday to sunday, 8am-4pm
            </p>
          </div>
        </motion.div>

        <motion.div
          id="hours"
          className="mt-4 md:mt-16 sm:w-full flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-(--yellow) text-black flex flex-col justify-center items-center p-12">
            <h5 className="text-xl md:text-2xl font-semibold mb-6">menu</h5>
            <p className="mb-4 text-sm md:text-lg">
              visit us in person and discover our weekly special!
            </p>
            <a href="/menu" className="underline font-medium hover:font-bold text-sm md:text-lg">
              view our cafe and brunch menu
            </a>
          </div>
          <div
            className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/coffee_${currentIndex}.png)`,
            }}
          ></div>
        </motion.div>

        <Reservations />

        <motion.div
          id="reviews"
          className="mt-16 md:mt-32 justify-center md:flex"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row text-black md:h-64 w-[88vw] md:w-full">
            <div className="md:w-1/3 flex flex-col items-center justify-evenly text-(--green-accent) hover:text-black border border-(--green-accent) md:border-r-0 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl px-4 py-6 hover:bg-(--yellow)">
              <p className="text-sm md:text-lg font-semibold">
                "Cafe Grenouille is an absolute gem in the heart of Toronto!"
              </p>
              <img src="/logos/toronto-life-logo.svg" className="mt-4 w-16 md:w-22" />
            </div>

            <div className="md:w-1/3 flex flex-col items-center justify-evenly text-(--green-accent) hover:text-black border border-(--green-accent) md:border-r-0 px-4 py-6 md:py-12 hover:bg-(--yellow)">
              <p className="text-sm md:text-lg font-semibold">
                "For coffee lovers and brunch enthusiasts alike!"
              </p>
              <img src="/logos/the-globe-and-mail-logo.svg" className="mt-4 h-3 md:h-4" />
            </div>

            <div className="md:w-1/3 flex flex-col items-center justify-evenly text-(--green-accent) hover:text-black border border-(--green-accent) md:rounded-tr-2xl rounded-br-2xl rounded-bl-2xl md:rounded-bl-none px-4 py-6 md:py-12 hover:bg-(--yellow)">
              <p className="text-sm md:text-lg font-semibold">
                "This café deserves a top spot on your bucket list!"
              </p>
              <img src="/logos/blogto-logo.svg" className="mt-4 w-16 md:w-22" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
