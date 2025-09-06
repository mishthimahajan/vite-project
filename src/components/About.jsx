import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6 "
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/hand-drawn-coffee-cartoon-illustration_23-2150646251.jpg?semt=ais_incoming&w=740&q=80')",
        backgroundSize:"medium",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-5xl font-bold text font-[var(--font-poppins)] mb-6">
        About Us
      </h2>
      <h3 className="text-2xl text-amber-900 font-semibold font-[var(--font-poppins)]">
        Passion for perfect Brew
      </h3>
      <p className="max-w-3xl mx-auto mt-6 text-blue text-lg leading-relaxed font-[var(--font-poppins)]">
        Coffee has a story as rich as its aroma. Legend says coffee was first
        discovered in the 9th century in Ethiopia, when a shepherd noticed his
        goats became energetic after eating coffee berries. From there, the
        magical beans traveled to the Arabian Peninsula, where coffee became an
        important part of culture, conversation, and community.
      </p>
    </section>
  );
}
