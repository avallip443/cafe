import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import InstagramIcon from "../assets/InstagramIcon";

const Footer: React.FC = () => {
  return (
    <div
      id="footer"
      className="bg-black flex justify-center items-center text-white"
    >
      <motion.div
        className="w-3/4 pt-8 md:pt-12 pb-6 flex flex-col items-center overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src="/logos/cafe-logo-white.png"
          alt="Cafe Logo"
          className="w-30 md:w-56"
        />
        
        <div className="flex flex-col md:flex-row text-md md:text-xl mt-4 md:gap-4">
          <p className="font-bold text-(--green)">cafe grenouille</p>
          <p>489 cappuccino st, toronto</p>
        </div>

        <div className="flex gap-4 mt-4">
          <motion.a
            href="https://www.google.ca/maps/"
            target="_blank"
            className="w-10 cursor-pointer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPinIcon className="w-10" />
          </motion.a>
          <motion.a
            href="mailto:cafegrenouille@gmail.com"
            className="w-10 cursor-pointer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <EnvelopeIcon className="w-10" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/"
            target="_blank"
            className="w-10 cursor-pointer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <InstagramIcon />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
