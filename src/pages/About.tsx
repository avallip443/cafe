import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="w-full mt-12 p-4 flex justify-center">
      <div className="max-w-6xl flex flex-col items-center justify-center">
        <motion.h1
          className="text-2xl md:text-4xl w-9/10 md:w-3/5 text-black px-12 py-3 bg-(--green) rounded-2xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          about cafe grenouille
        </motion.h1>

        <motion.h2
          className="text-lg md:text-xl text-(--green-accent) px-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          we love frogs and tasty pastries
        </motion.h2>

        <motion.div
          id="landing-image"
          className="w-[88vw] md:w-full h-64 md:h-120 mt-3 bg-cover bg-center bg-[url('/images/cafe_landing2.jpg')] rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        <div className="mt-4 md:mt-16 sm:w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            className="h-64 md:h-135 w-[88vw] md:w-1/2 bg-(--off-white) text-black flex flex-col justify-center items-center p-8 md:p-12 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h5 className="text-xl md:text-2xl font-semibold mb-4">
              we love making (and eating) good food
            </h5>
            <p>we've been serving toronto brunch since 2025</p>
          </motion.div>

          <motion.div
            className="h-64 md:h-135 w-[88vw] md:w-1/2 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url(/images/brunch_5.png)`,
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <motion.div
          className="mt-14 md:mt-16 flex flex-col justify-center items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h4
            className="text-(--beige) text-lg md:text-2xl mb-4 w-70 md:w-100 py-2 font-medium bg-(--dark-green) rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            parisan brunch and cafe
          </motion.h4>

          <motion.p
            className="text-white text-sm md:text-lg w-[86vw] md:w-3/4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Welcome to Cafe Grenouille, a charming French eatery in the heart of
            Toronto. We proudly serve everything from delicious pastries, richly
            crafted coffee, and classic brunch dishes. With locally sourced
            ingredients and a passion for great food, our cafe brings the rich
            flavours of Paris right to your table!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
