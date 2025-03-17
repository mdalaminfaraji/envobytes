import React, { useState } from "react";
import Image from "next/image";

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

  // Demo portfolio data
  const portfolioData = [
    {
      id: 1,
      title: "LanghamTrading Profitabel Stock Picks",
      categories: ["ui-ux", "website"],
      image: "/Envobyte/portfolio.png",
      logos: ["/Envobyte/wordpress.png"],
    },
    {
      id: 2,
      title: "Improve your Skill With This Way",
      categories: ["ui-ux", "website"],
      image: "/Envobyte/Frame 1000006145.png",
      logos: ["/Envobyte/wordpress.png", "/Envobyte/seo.png"],
    },
    {
      id: 3,
      title: "Grow Your Skills, Define Your Future",
      categories: ["website", "banner-design"],
      image: "/Envobyte/Frame 1000006156.png",
      logos: ["/Envobyte/wordpress.png"],
    },
    {
      id: 4,
      title: "Email Marketing Software to Engage Your Audience",
      categories: ["ui-ux", "seo"],
      image: "/Envobyte/Group 1000006039.png",
      logos: ["/Envobyte/wordpress.png", "/Envobyte/seo.png"],
    },
    {
      id: 5,
      title: "Ask Anything You Desire, Our Chat Holds the Solutions",
      categories: ["ui-ux", "website"],
      image: "/Envobyte/Group 1000006040.png",
      logos: ["/Envobyte/wordpress.png"],
    },
    {
      id: 6,
      title: "DIGITAL DESIGN AGENCY",
      categories: ["banner-design", "logo-design"],
      image: "/Envobyte/Rectangle 6052-1.png",
      logos: ["/Envobyte/seo.png"],
    },
    {
      id: 7,
      title: "LanghamTrading Profitabel Stock Picks",
      categories: ["ui-ux", "google-ads"],
      image: "/Envobyte/portfolio.png",
      logos: ["/Envobyte/wordpress.png", "/Envobyte/seo.png"],
    },
    {
      id: 8,
      title: "Improve your Skill With This Way",
      categories: ["seo", "google-ads"],
      image: "/Envobyte/Frame 1000006145.png",
      logos: ["/Envobyte/wordpress.png"],
    },
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState("ui-ux");

  // Filtered portfolio items
  const filteredItems =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((item) =>
          item.categories.includes(activeCategory)
        );

  return (
    <section className="max-w-[1930px] mx-auto  relative  -mt-[500px]">
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
        <button className="bg-[#FF693B] hover:bg-orange-600 transition-colors text-white px-6 py-2 rounded">
          All Portfolio
        </button>
      </div>

      {/* Portfolio Filter Categories */}
      <div className="flex flex-wrap  pb-14 gap-8  px-14">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`text-sm font-medium uppercase tracking-wide pb-2 px-2 ${
              activeCategory === category.id
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pb-8 bg-white bg-opacity-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-md border border-gray-200 h-[250px] hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#001246]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 bg-white bg-opacity-10">
              <div className="flex items-center gap-2 mb-2">
                {item.logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo}
                    width={24}
                    height={24}
                    alt="Technology"
                    className="rounded-full bg-white p-1"
                  />
                ))}
              </div>
              <h3 className="text-white font-medium text-sm">{item.title}</h3>
            </div> */}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center bg-white bg-opacity-10 pb-32">
        <div className="flex gap-1">
          <button className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-500">
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
          <button className="w-8 h-8 rounded bg-[#FF693B] text-white flex items-center justify-center">
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
        <div className="text-gray-500 uppercase text-sm tracking-widest font-light">
          CREATIVE PORTFOLIO
        </div>
      </div>
    </section>
  );
}
