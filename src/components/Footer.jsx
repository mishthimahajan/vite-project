import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Brew Haven</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            Serving happiness in every cup since 1998. Our mission is to bring
            ethically sourced, perfectly brewed coffee to every coffee lover.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-yellow-300 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#testimonial" className="hover:text-yellow-300 transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-200 text-sm mb-2">📍 123 Coffee Street, Aroma City</p>
          <p className="text-gray-200 text-sm mb-2">📞 +91 98765 43210</p>
          <p className="text-gray-200 text-sm mb-6">✉️ hello@brewhaven.com</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-300 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Brew Haven. All rights reserved.
      </div>
    </footer>
  );
}
