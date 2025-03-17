import React from "react";
import Image from "next/image";

export default function Details() {
  // Demo data array of objects for the details cards
  const detailsData = [
    {
      id: 1,
      title: "Why Chose Envobyte",
      subtitle: "Experienced & trustworthy",
      description:
        "We're experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.",
      icon: "/Envobyte/envobyte-logo.png",
    },
    {
      id: 2,
      title: "What's Your Benefit",
      subtitle: "No hassle with best price",
      description:
        "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.",
      icon: "/Envobyte/read.png",
    },
    {
      id: 3,
      title: "What is Combo Offer",
      subtitle: "Get 9 services in one package",
      description:
        "You're getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!",
      icon: "/Envobyte/answer.png",
    },
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Background wave pattern */}

      <div className=" mx-auto px-4 relative z-10 container max-w-[1107px] h-[882px] -mb-80">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-wide font-medium mb-2">
            MORE DETAILS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002080]">
            Get Your Answers
          </h2>
        </div>

        {/* Three column layout using the data array */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1107px] mx-auto">
          {detailsData.map((item, index) => (
            <div
              key={item.id}
              className={` p-6 flex flex-col items-center text-center  border w-[369px] h-[535px] ${
                index === 0 ? "bg-[#0A2C8C]" : "bg-white"
              }`}
            >
              <Image
                src={item.icon}
                width={280}
                height={280}
                alt="Icon illustration"
                className="object-contain mb-6"
              />
              <h3
                className={`text-xl font-bold mb-1 ${
                  index === 0 ? "text-white" : "text-[#001246]"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`font-medium text-sm mb-4 ${
                  index === 0 ? "text-[#65B5FF]" : "text-[#002AA3]"
                }`}
              >
                {item.subtitle}
              </p>
              <p className={`${index === 0 ? "text-white" : "text-[#424242]"}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* See Pricing Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-[#FF693B] text-white rounded-md hover:bg-orange-600 transition-all duration-300 font-medium">
            See Pricing
          </button>
        </div>
      </div>
      <div
        className="w-full"
        style={{
          backgroundImage: "url('/Envobyte/wave-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "713px",
        }}
      />
    </section>
  );
}
