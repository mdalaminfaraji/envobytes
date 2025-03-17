"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { serviceCards } from "@/lib/servicesData";
import { TfiLayoutLineSolid } from "react-icons/tfi";
export default function Services() {
  const [activeTab, setActiveTab] = useState("WEBSITE");
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    { id: "WEBSITE", label: "WEBSITE" },
    { id: "UI/UX", label: "UI/UX" },
    { id: "SEO", label: "SEO" },
    { id: "LOGO_DESIGN", label: "LOGO DESIGN" },
    { id: "BANNER_DESIGN", label: "BANNER DESIGN" },
    { id: "GOOGLE_ADS", label: "GOOGLE ADS" },
  ];

  // Calculate total slides for the current active tab
  const totalSlides = serviceCards[activeTab]?.length || 0;

  // Handle next slide
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(totalSlides - 1);
    }
  };

  return (
    <section className="pt-40 pb-20 relative">
      <div className="mx-auto px-4 md:px-6">
        {/* Background gradient element */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, rgba(12, 137, 255, 0.8) 0%, rgba(4, 19, 91, 0.8) 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "100%",
            pointerEvents: "none",
          }}
        ></div>

        {/* Section Header with Title and All Services Button */}
        <div className="flex justify-between items-center mb-8 border-b-[1px] border-[#FFFFFF42] pb-4 relative z-10">
          <div>
            <h2 className="text-sm text-[#FF693B] uppercase font-semibold mb-2">
              DIGITAL SERVICES
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Check Our Available Services
            </h3>
          </div>
          <button
            className="px-6 py-2 text-white rounded-md transition-colors relative overflow-hidden"
            style={{
              background: "linear-gradient(45deg, #FF693B, #FF4D4D)",
            }}
          >
            <span className="relative z-10">All Services</span>
            <span
              className="absolute inset-0 bg-white opacity-10 blur-sm"
              //   style={{
              //     background:
              //       "radial-gradient(circle at center, rgba(12, 137, 255, 0.8) 0%, rgba(4, 19, 91, 0.8) 70%)",
              //     filter: "blur(10px)",
              //     zIndex: "10",
              //   }}
            ></span>
          </button>
        </div>

        {/* Service Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 relative z-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-md transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "text-[#0C89FF]"
                  : "text-white hover:text-[#0C89FF]"
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentSlide(0);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Cards Slider */}
        <div className="relative overflow-hidden z-10">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / 3.25)}%)`,
            }}
          >
            {serviceCards[activeTab].map((card, index) => (
              <div
                key={card.id}
                className="min-w-full w-full md:min-w-[30%] md:w-[30%] px-3"
              >
                <div className="bg-[#03205A] rounded-lg p-6 text-white text-center transition-all duration-300 hover:shadow-lg border border-blue-900">
                  <div className="flex justify-center mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-300 mb-6">{card.description}</p>
                  <div className="flex justify-center gap-2">
                    <button className="px-4 py-2 bg-[#0C89FF] text-white rounded-md hover:bg-blue-700 transition-colors">
                      Portfolio
                    </button>
                    <button className="px-4 py-2 border border-gray-400 text-white rounded-md hover:bg-white/10 transition-colors">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation */}
          <div className="flex justify-center items-center mt-8 gap-2">
            {/* Previous button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#001045] text-white hover:bg-[#0C89FF] transition-colors"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#FF693B] text-white hover:bg-orange-600 transition-colors"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Creative Solution Text */}
        <div className="flex justify-end  z-10">
          <p className="text-white uppercase tracking-widest flex items-center gap-2">
            CREATIVE SOLUTION{" "}
            <TfiLayoutLineSolid className="text-[#FFFFFF]" size={60} />
          </p>
        </div>
      </div>
    </section>
  );
}
