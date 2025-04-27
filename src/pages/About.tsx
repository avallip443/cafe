import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // small delay between each child
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About: React.FC = () => {
  return (
    <motion.div
      className="w-full my-12 md:my-22 p-4 flex justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl md:text-[89px] font-semibold w-9/10 md:w-full text-white py-3"
          variants={childVariants}
          layout
        >
          about cafe grenouille
        </motion.h1>
        <motion.div
          id="landing-image"
          className="w-[88vw] md:w-full h-64 md:h-120 mt-3 bg-cover bg-center bg-[url('/images/cafe_landing2.jpg')] rounded-2xl"
          variants={childVariants}
          layout
        />
        <motion.h2
          className="text-sm md:text-2xl text-(--green-accent) px-4 py-6"
          variants={childVariants}
          layout
        >
          we love frogs and tasty pastries
        </motion.h2>

        <div className="mt-4 md:mt-16 sm:w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            className="h-64 md:h-135 w-[88vw] md:w-2/5 bg-(--off-white) text-black flex flex-col justify-center items-center p-8 md:p-12 rounded-2xl"
            variants={childVariants}
            layout
          >
            <h5 className="text-2xl md:text-6xl font-semibold mb-4">
              we love making (and eating) good food
            </h5>
            <p className="text-lg md:text-2xl">
              we've been serving toronto brunch since 2025
            </p>
          </motion.div>
          <motion.div
            className="h-64 md:h-135 w-[88vw] md:w-3/5 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(/images/brunch_5.png)` }}
            variants={childVariants}
            layout
          />
        </div>

        <motion.div
          className="mt-14 md:mt-16 flex flex-col justify-center items-center px-4"
          variants={childVariants}
          layout
        >
          <motion.h4
            className="text-(--beige) text-3xl md:text-5xl mb-2 md:mb-4 w-70 md:w-190 py-4 px-2 md:mt-12 font-medium bg-(--dark-green) rounded-xl"
            layout
          >
            parisian brunch and cafe
          </motion.h4>
          <motion.p
            className="text-white text-lg md:text-3xl w-[86vw] md:w-9/10 my-6"
            layout
          >
            Welcome to Cafe Grenouille, a charming French eatery in the heart of Toronto.
            We proudly serve everything from delicious pastries, richly crafted coffee,
            and classic brunch dishes. With locally sourced ingredients and a passion
            for great food, our cafe brings the rich flavours of Paris right to your table!
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
