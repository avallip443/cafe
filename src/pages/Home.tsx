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
    <div className="flex justify-center w-full p-4 pt-0 overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-6xl">
        <motion.div
          id="landing-image"
          className="relative flex flex-col justify-end items-center w-screen h-82 md:h-screen bg-[url('/images/cafe_landing1.png')] bg-cover bg-center pb-4 md:pb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            id="overlay"
            className="absolute inset-0 bg-(--dark-green)/35 z-0"
          />
          <div className="flex w-9/10 md:w-full">
            <motion.h1
              className="relative z-10 w-9/10 md:w-4/5 text-5xl md:text-[12rem] text-white text-left font-semibold leading-none md:pl-9"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              cafe grenouille
            </motion.h1>
            <motion.p
              className="relative hidden md:block text-md md:text-[72px] font-semibold text-right text-white leading-tight [text-shadow:0.1px_0.1px_0_black,-0.1px_0.1px_0_black,0.1px_-0.1px_0_black,-0.1px_-0.1px_0_black]  pr-6 md:pr-9"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              a slice of paris in the heart of toronto
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          id="info"
          className="flex flex-col-reverse md:flex-row justify-between items-center sm:w-full mt-12 md:mt-40 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-[88vw] md:w-3/5 h-64 md:h-135 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url(/images/brunch_${currentIndex}.png)`,
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          ></motion.div>

          <motion.div
            className="flex flex-col justify-center items-center w-[88vw] md:w-2/5 h-64 md:h-135 bg-(--green) rounded-2xl text-black p-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h5 className="text-3xl md:text-6xl font-semibold mb-6">
              cafe grenouille
            </h5>
            <p className="text-md md:text-2xl mb-4">
              489 cappuccino st, toronto
            </p>
            <p className="text-md md:text-2xl font-medium underline">
              tuesday to sunday, 8am-4pm
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          id="menu"
          className="flex flex-col md:flex-row justify-between items-center sm:w-full gap-6 mt-6 mb-12 md:mb-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col justify-center items-center w-[88vw] md:w-2/5 h-64 md:h-135 bg-(--off-white) rounded-2xl text-black p-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="text-3xl md:text-6xl font-semibold mb-6">menu</h5>
            <p className="text-md md:text-2xl mb-4">
              visit us in person and discover our weekly special!
            </p>
            <p>
              <a
                href="/menu"
                className="text-md md:text-2xl font-medium hover:font-bold underline"
              >
                view cafe and brunch menu
              </a>
            </p>
          </motion.div>

          <motion.div
            className="w-[88vw] md:w-3/5 h-64 md:h-135 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url(/images/coffee_${currentIndex}.png)`,
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="md:flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Reservations />
        </motion.div>

        <motion.div
          id="reviews"
          className="md:flex justify-center my-12 md:my-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row w-[88vw] md:w-full md:h-64 text-black gap-3">
            {[
              {
                text: `"Cafe Grenouille is an absolute gem in the heart of Toronto!"`,
                logo: "/logos/toronto-life-logo.svg",
              },
              {
                text: `"For coffee lovers and brunch enthusiasts alike!"`,
                logo: "/logos/the-globe-and-mail-logo.svg",
              },
              {
                text: `"This café deserves a top spot on your bucket list!"`,
                logo: "/logos/blogto-logo.svg",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="group flex flex-col items-center justify-evenly md:w-1/3 text-white hover:text-black bg-(--dark-green)/20 hover:bg-(--green) rounded-2xl border-2 border-(--dark-green) px-4 py-6 cursor-pointer filter transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-md md:text-2xl font-semibold">
                  {review.text}
                </p>
                <img
                  src={review.logo}
                  className={`mt-4 transition-all duration-300 ${
                    review.logo.includes("globe")
                      ? "h-4 md:h-5"
                      : "w-22 md:2-26"
                  } invert group-hover:filter-none`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
