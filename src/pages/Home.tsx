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
        <motion.div
          id="landing-image"
          className="w-screen h-82 md:h-screen bg-cover bg-center bg-[url('/images/cafe_landing1.jpg')] flex flex-col justify-end items-end pb-4 md:pb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-xl md:text-7xl bg-(--green-accent)/60 w-55 md:w-200 pr-6 md:pr-12 py-2 md:py-5 rounded-l-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            cafe grenouille
          </motion.p>
          <motion.p
            className="text-xs md:text-3xl w-2/3 text-right md:w-full mt-2 md:mt-4 mr-2 md:mr-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            a slice of paris in the heart of toronto
          </motion.p>
        </motion.div>

        <motion.div
          id="menu"
          className="mt-4 md:mt-16 sm:w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url(/images/brunch_${currentIndex}.png)`,
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          ></motion.div>

          <motion.div
            className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-(--green) text-black flex flex-col justify-center items-center p-12 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h5 className="text-xl md:text-2xl font-semibold mb-6">
              cafe grenouille
            </h5>
            <p className="mb-4 text-sm md:text-lg">
              123 react rd, toronto, canada
            </p>
            <p className="font-medium underline text-sm md:text-lg">
              tuesday to sunday, 8am-4pm
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          id="hours"
          className="mt-4 md:mt-16 sm:w-full flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-(--yellow) text-black flex flex-col justify-center items-center p-12 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          <motion.div
            className="h-64 md:h-150 w-[88vw] md:w-1/2 bg-cover bg-center rounded-2xl"
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
          id="reviews"
          className="justify-center md:flex"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Reservations />
        </motion.div>

        <motion.div
          id="reviews"
          className="justify-center md:flex"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row text-black md:h-64 w-[88vw] md:w-full gap-3">
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
                className="md:w-1/3 flex flex-col items-center justify-evenly text-(--green-accent) hover:text-black border border-(--green-accent) px-4 py-6 hover:bg-(--yellow) cursor-pointer rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-sm md:text-lg font-semibold">
                  {review.text}
                </p>
                <img
                  src={review.logo}
                  className={`mt-4 ${
                    review.logo.includes("globe")
                      ? "h-4 md:h-5"
                      : "w-22 md:2-26"
                  }`}
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
