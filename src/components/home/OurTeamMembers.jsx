"use client";
import React, { useState, useRef } from "react";

export default function OurTeamMembers() {
  // Demo team members data
  const teamMembers = [
    {
      id: 1,
      name: "Mr Anik",
      role: "Backend Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      name: "Mr Shahed",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 3,
      name: "Mr Mainul Islam",
      role: "SEO Expert",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      name: "Mr Hasib",
      role: "Content Writer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 5,
      name: "Ms Sarah",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 6,
      name: "Mr David",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 7,
      name: "Ms Jennifer",
      role: "Digital Marketer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 8,
      name: "Mr Robert",
      role: "DevOps Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
  ];

  // State for slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Calculate max number of slides
  const itemsPerView = 4;
  const maxSlide = Math.ceil(teamMembers.length / itemsPerView) - 1;

  // Handle slide navigation
  const handleSlide = (direction) => {
    if (direction === "prev" && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (direction === "next" && currentSlide < maxSlide) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-medium uppercase tracking-wider mb-2">
            EXPERIENCED TEAM
          </p>
          <h2 className="text-4xl font-bold text-[#001246] mb-10">
            Our Team Members
          </h2>
        </div>

        {/* Team Member Slider */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div key={member.id} className="min-w-[25%] border h-[433px]">
                  <div className="relative overflow-hidden group">
                    {/* Member Image */}
                    <div className="">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-[337px] object-cover"
                      />
                    </div>

                    {/* Member Info */}
                    <div className="bg-[#001d80] text-white p-6">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-2">
            <button
              className={`w-8 h-8 rounded border flex items-center justify-center ${
                currentSlide > 0
                  ? "border-[#0C52DB] text-[#0C52DB]"
                  : "border-gray-300 text-gray-400 cursor-not-allowed"
              }`}
              onClick={() => handleSlide("prev")}
              disabled={currentSlide === 0}
              aria-label="Previous team members"
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
              aria-label="Next team members"
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
