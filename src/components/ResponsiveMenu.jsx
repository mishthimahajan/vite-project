import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.36, ease: "easeInOut" }}
          className="fixed top-0 left-0 h-screen w-[75%] flex flex-col justify-between bg-amber-950 px-8 pb-6 pt-16 text-white md:hidden rounded-r-xl shadow-md z-40"
        >
          <nav className="mt-12">
            <ul className="flex flex-col gap-7 text-lg font-semibold">
              <li onClick={() => setOpen(false)}>
                <a href="/">Home</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#menu">Menu</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#about">About</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#contact">
                  <button className="bg-amber-800 hover:bg-amber-900 px-3 py-1 rounded-md">
                    Contact
                  </button>
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h5 className="text-center text-sm">made with ❤️ for you </h5>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu

