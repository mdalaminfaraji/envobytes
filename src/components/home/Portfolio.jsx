"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import portfolioData from "@/lib/portfoliosData";

export default function Portfolio() {
  // Categories for the portfolio filters
  const categories = [
    { id: "ui-ux", name: "UI/UX" },
    { id: "website", name: "WEBSITE" },
    { id: "seo", name: "SEO" },
    { id: "logo-design", name: "LOGO DESIGN" },
    { id: "banner-design", name: "BANNER DESIGN" },
    { id: "google-ads", name: "GOOGLE ADS" },
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState("ui-ux");

  // Reference for slider
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  // State for slider position
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filtered portfolio items
  const filteredItems =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((item) =>
          item.categories.includes(activeCategory)
        );

  // Calculate how many slides we need
  const maxSlide = Math.max(0, Math.ceil(filteredItems.length / 5) - 1);

  // Handle slider navigation
  const handleSlide = (direction) => {
    if (direction === "next" && currentSlide < maxSlide) {
      setCurrentSlide((prev) => prev + 1);
    } else if (direction === "prev" && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // Reset slide position when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory]);

  return (
    <section className="max-w-[1930px] mx-auto relative -mt-[500px]">
      {/* Portfolio Header */}
      <div className="flex justify-between items-center mb-8 mx-14 pb-7 border-b border-gray-200">
        <div>
          <p className="text-blue-500 font-medium uppercase tracking-wider mb-2">
            UI/UX PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001246]">
            Check Our Previous Work
          </h2>
        </div>
        <button className="bg-[#FF693B] hover:bg-orange-600 transition-colors text-white px-12 py-3 rounded">
          All Portfolio
        </button>
      </div>

      {/* Portfolio Filter Categories */}
      <div className="flex flex-wrap pb-10 gap-8 px-14">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`text-[16px] font-medium uppercase tracking-wide pb-2 px-2 ${
              activeCategory === category.id
                ? "text-[#0C89FF]"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Portfolio Slider - First Row */}
      <div className=" mb-6 relative bg-white">
        <div className="overflow-hidden">
          <div
            ref={sliderRef1}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / 4.25)}%)`,
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative min-w-[23%] mx-1.5 h-[250px] overflow-hidden rounded-md border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Slider - Second Row */}
      <div className=" pb-10 relative bg-white">
        <div className="overflow-hidden">
          <div
            ref={sliderRef2}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / 4.25)}%)`,
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={`second-${item.id}`}
                className="group relative min-w-[23%] mx-1.5 h-[250px] overflow-hidden rounded-md border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-2 bg-white pb-28">
        <button
          className={` w-9 h-9 rounded-md border border-[#0A2C8C] bg-white shadow-md flex items-center justify-center ${
            currentSlide === 0
              ? "text-[#0A2C8C] cursor-not-allowed"
              : "text-[#0A2C8C] hover:bg-gray-100"
          }`}
          onClick={() => handleSlide("prev")}
          disabled={currentSlide === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>

        <button
          className={`w-9 h-9 rounded-md border border-gray-300 bg-[#FF693B] shadow-md flex items-center justify-center ${
            currentSlide >= maxSlide
              ? "text-white cursor-not-allowed"
              : "text-white hover:bg-[#ff3b3b]"
          }`}
          onClick={() => handleSlide("next")}
          disabled={currentSlide >= maxSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-18 right-0 text-[#353535] uppercase text-sm tracking-widest font-light flex items-center gap-2 pb-8 ">
        CREATIVE PORTFOLIO <TfiLayoutLineSolid size={40} />
      </div>
    </section>
  );
}
