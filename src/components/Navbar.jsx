import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-amber-950 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://img.freepik.com/premium-vector/coffee-cup-logo-vector-icon-design-web-print-applications_1034893-3559.jpg"
            alt="Brew Haven Logo"
            className="w-10 h-10"
          />
          <h1 className="text-lg text-white font-[var(--font-poppins)]">
            Brew Haven
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex gap-7 items-center text-lg font-semibold text-white font-[var(--font-poppins)]">
            <a href="/"><li className="cursor-pointer">Home</li></a>
            <a href="#menu"><li className="cursor-pointer">Menu</li></a>
            <a href="#about"><li className="cursor-pointer">About</li></a>
            <a href="#testimonial"><li className="cursor-pointer">Testimonial</li></a>
          </ul>
          <a href="#contact">
            <button className="bg-amber-800 hover:bg-amber-900 text-white px-3 py-1 rounded-md transition-colors">
              Contact
            </button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {open ? (
            <X
              onClick={() => setOpen(false)}
              className="text-white w-8 h-8 cursor-pointer transition-transform duration-300"
            />
          ) : (
            <Menu
              onClick={() => setOpen(true)}
              className="text-white w-8 h-8 cursor-pointer transition-transform duration-300"
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;


