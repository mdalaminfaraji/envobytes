"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Services() {
  const [activeTab, setActiveTab] = useState("WEBSITE");

  const tabs = [
    { id: "WEBSITE", label: "WEBSITE" },
    { id: "UI/UX", label: "UI/UX" },
    { id: "SEO", label: "SEO" },
    { id: "LOGO_DESIGN", label: "LOGO DESIGN" },
    { id: "BANNER_DESIGN", label: "BANNER DESIGN" },
    { id: "GOOGLE_ADS", label: "GOOGLE ADS" },
  ];

  const serviceCards = {
    WEBSITE: [
      {
        id: 1,
        title: "WordPress Website",
        description: "Design & Development",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 2,
        title: "Shopify Website",
        description: "E-commerce Solutions",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 3,
        title: "React JS Website",
        description: "Modern & Fast",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
    ],
    "UI/UX": [
      {
        id: 1,
        title: "UI/UX Design",
        description: "Modern Interfaces",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 2,
        title: "Mobile App Design",
        description: "iOS & Android",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 3,
        title: "Wireframing",
        description: "Blueprint Design",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
        ),
      },
    ],
    SEO: [
      {
        id: 1,
        title: "Monthly SEO",
        description: "Rank #1 on Google",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 2,
        title: "Content Marketing",
        description: "SEO Optimized",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 3,
        title: "Keyword Research",
        description: "Targeted Strategy",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
        ),
      },
    ],
    LOGO_DESIGN: [
      {
        id: 1,
        title: "Logo Design",
        description: "Professional Branding",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 2,
        title: "Brand Identity",
        description: "Complete Package",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 3,
        title: "Logo Redesign",
        description: "Modern Refresh",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        ),
      },
    ],
    BANNER_DESIGN: [
      {
        id: 1,
        title: "Banner Design",
        description: "Web & Social Media",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 2,
        title: "Display Ads",
        description: "Google Network",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 3,
        title: "Social Media Posts",
        description: "Engaging Content",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </div>
        ),
      },
    ],
    GOOGLE_ADS: [
      {
        id: 1,
        title: "Google Search Ads",
        description: "PPC Campaigns",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 2,
        title: "Display Network",
        description: "Visual Advertising",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 3,
        title: "YouTube Ads",
        description: "Video Marketing",
        icon: (
          <div className="bg-blue-600 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
    ],
  };

  return (
    <section className="pt-40 pb-20 relative">
      <div className="mx-auto px-4 md:px-6 ">
        {/* Section Header with Title and All Services Button */}
        <div className="flex justify-between items-center mb-8 border-b-[1px] border-[#FFFFFF42] pb-4">
          <div>
            <h2 className="text-sm text-[#FF693B] uppercase font-semibold mb-2">
              DIGITAL SERVICES
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Check Our Available Services
            </h3>
          </div>
          <button className="px-6 py-2 bg-[#FF693B] text-white rounded-md hover:bg-orange-600 transition-colors">
            All Services
          </button>
        </div>

        {/* Service Category Tabs */}
        <div className="flex flex-wrap  gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-md transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? " text-[#0C89FF]"
                  : "text-white hover:text-[#0C89FF]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards[activeTab].map((card) => (
            <div
              key={card.id}
              className="bg-[#03205A] rounded-lg p-6 text-white text-center transition-all duration-300 hover:shadow-lg border border-blue-900"
            >
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
          ))}
        </div>

        {/* Creative Solution Text */}
        <div className="flex justify-end mt-12">
          <p className="text-white uppercase tracking-widest">
            CREATIVE SOLUTION
          </p>
        </div>
      </div>
    </section>
  );
}
