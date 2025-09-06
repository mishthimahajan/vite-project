import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-amber-200 to-yellow-100 py-16 px-6"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center text-amber-900 mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Left Side - Contact Info */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-6">
            Have a question or want to share your coffee story? Reach out to us,
            and we’ll get back to you as soon as possible.
          </p>

          <ul className="space-y-4">
            <li>
              <span className="font-bold text-amber-900">📍 Address:</span>{" "}
              123 Coffee Street, Aroma City
            </li>
            <li>
              <span className="font-bold text-amber-900">📞 Phone:</span>{" "}
              +91 98765 43210
            </li>
            <li>
              <span className="font-bold text-amber-900">✉️ Email:</span>{" "}
              hello@brewhaven.com
            </li>
          </ul>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

