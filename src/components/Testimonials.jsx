import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Sophia Williams",
    role: "Coffee Enthusiast",
    feedback:
      "The best coffee I’ve ever had! The aroma, the taste, everything feels perfect. Brew Haven has become my everyday escape.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "James Miller",
    role: "Regular Customer",
    feedback:
      "Not only is the coffee amazing, but the atmosphere is so cozy. It’s my go-to spot for relaxation and work.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Emma Johnson",
    role: "Food Blogger",
    feedback:
      "I love how ethical and sustainable their coffee sourcing is. Every sip feels special and guilt-free!",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <section
      id="testimonial"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-amber-100 to-yellow-200 py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
        What Our Customers Say
      </h2>

      <div className="w-full max-w-3xl">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-6">
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-amber-500 mb-4"
                />
                <p className="italic text-gray-700 mb-4">"{t.feedback}"</p>
                <h3 className="font-bold text-lg text-amber-900">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
