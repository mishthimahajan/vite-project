import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-slate-100 via-amber-200 to-amber-950 mt-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0">

        {/* LEFT TEXT SECTION */}
        <motion.div
          className="space-y-5 px-4 md:px-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h3
            className="text-amber-900 font-semibold font-cursive text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to Brew Haven___
          </motion.h3>

          <motion.h1
            className="text-4xl md:text-6xl font-bold font-[var(--font-pacifico)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience Artisanal{" "}
            <span className="text-amber-900 font-[var(--font-sriracha)]">
              coffee
            </span>{" "}
            at brew haven
          </motion.h1>

          <motion.p
            className="font-[var(--font-poppins)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Indulge in our carefully crafted brews, made from ethically sourced
            beans and brewed to perfection.
          </motion.p>

          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#menu">
              <button className="bg-amber-700 text-white px-3 py-2 rounded-md">
                View Menu
              </button>
            </a>
            <a href="#menu">
              <button className="bg-transparent border border-amber-900 text-amber-900 rounded-md px-3 py-2">
                Our story
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
        >
          <img
            src="https://www.shutterstock.com/image-illustration/liquid-coffee-pours-splashes-white-600nw-1874807017.jpg"
            className="w-[500px]"
          />
        </motion.div>

        {/* Floating Coffee Beans */}
        <motion.img
          src="https://png.pngtree.com/png-vector/20240803/ourmid/pngtree-d-rendered-coffee-bean-illustration-isolated-on-black-background-png-image_13363566.png"
          className="absolute hidden md:block bottom-20 left-36 w-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />

        <motion.img
          src="https://png.pngtree.com/png-vector/20240803/ourmid/pngtree-d-rendered-coffee-bean-illustration-isolated-on-black-background-png-image_13363566.png"
          className="absolute hidden md:block top-14 left-0 w-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        />
      </div>
    </div>
  );
};

export default Hero;
