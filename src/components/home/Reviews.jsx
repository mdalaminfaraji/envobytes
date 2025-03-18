"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { reviews } from "@/lib/reviewsData";

export default function Reviews() {
  // State for slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Items per page (3 columns × 2 rows = 6 cards)
  const itemsPerPage = 6;
  const maxSlide = Math.ceil(reviews.length / itemsPerPage) - 1;

  // Get current page reviews
  const getCurrentPageReviews = () => {
    const startIndex = currentSlide * itemsPerPage;
    return reviews.slice(startIndex, startIndex + itemsPerPage);
  };

  // Handle slide navigation
  const handleSlide = (direction) => {
    if (direction === "prev" && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (direction === "next" && currentSlide < maxSlide) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Render star rating
  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className="text-blue-500 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-medium uppercase tracking-wider mb-2">
            CLIENT REVIEWS
          </p>
          <h2 className="text-4xl font-bold text-[#001246] mb-10">
            Our Proud Clients
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-[984px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentPageReviews().map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg w-[314px] h-[239px] shadow-sm hover:shadow-md transition-shadow relative"
                style={{
                  background: "white",
                  position: "relative",
                  zIndex: "1",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                {/* Gradient Border */}
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    content: '""',
                    position: "absolute",
                    inset: "-1px",
                    borderRadius: "8px",
                    padding: "1px",
                    background:
                      "linear-gradient(to top, #0A2C8C33 70%, #FFFFFF)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                ></div>

                {/* Star Rating */}
                <div className="flex mb-4">{renderStars(review.rating)}</div>

                {/* Review Text */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 mr-3 rounded-full overflow-hidden">
                    <img
                      src={review.author.image}
                      alt={review.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#001246]">
                      {review.author.name}
                    </h4>
                    <div className="flex items-center">
                      <Image
                        src={review.author.logo}
                        alt={review.author.company}
                        width={16}
                        height={16}
                        className="w-4 h-4 mr-1 rounded-full"
                      />
                      <p className="text-xs text-gray-500">
                        {review.author.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-10 gap-2">
            <button
              className={`w-8 h-8 rounded border flex items-center justify-center ${
                currentSlide > 0
                  ? "border-[#0C52DB] text-[#0C52DB]"
                  : "border-gray-300 text-gray-400 cursor-not-allowed"
              }`}
              onClick={() => handleSlide("prev")}
              disabled={currentSlide === 0}
              aria-label="Previous reviews"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
              className={`w-8 h-8 rounded border flex items-center justify-center ${
                currentSlide < maxSlide
                  ? "bg-[#FF693B] text-white border-[#FF693B]"
                  : "border-gray-300 text-gray-400 cursor-not-allowed"
              }`}
              onClick={() => handleSlide("next")}
              disabled={currentSlide >= maxSlide}
              aria-label="Next reviews"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
        </div>
      </div>
    </section>
  );
}
