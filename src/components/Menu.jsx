import React, { useState } from "react";

const menuItems = [
  {
    name: "Espresso",
    price: "$3",
    img: "https://www.shutterstock.com/image-photo/espresso-coffee-transparent-cup-600nw-2512810803.jpg",
  },
  {
    name: "Latte",
    price: "$4",
    img: "https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery-500x500.jpg",
  },
  {
    name: "Cappuccino",
    price: "$4.5",
    img: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?cs=srgb&dl=pexels-chevanon-312418.jpg&fm=jpg",
  },
  {
    name: "Mocha",
    price: "$5",
    img: "https://www.folgerscoffee.com/folgers/recipes/_Hero%20Images/Detail%20Pages/6330/image-thumb__6330__schema_image/CafeMocha-hero.61028a28.jpg",
  },
];

export default function Menu() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="menu"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-amber-700 via-amber-800 to-amber-950"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-white font-[var(--font-poppins)] mb-12">
        Best coffee for you
      </h2>

      {/* Grid of Menu Items */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl px-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 
              ${
                selected === index
                  ? "bg-amber-900 scale-105 text-white"
                  : "bg-gray-100 hover:scale-105"
              }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold font-[var(--font-poppins)]">
                {item.name}
              </h3>
              <p
                className={`font-bold font-[var(--font-poppins)] ${
                  selected === index ? "text-yellow-200" : "text-yellow-600"
                }`}
              >
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

