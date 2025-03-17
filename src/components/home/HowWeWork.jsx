import Image from "next/image";
import React from "react";

export default function HowWeWork() {
  return (
    <div
      className="w-full h-[1024px]"
      style={{
        backgroundImage: "url('/Envobyte/process-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-[#04135b81] bg-opacity-50 w-full h-full pt-28">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-white text-xl font-medium uppercase tracking-wider mb-2">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Our Process For Delivering <br />
              Results
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We follow a streamlined process to ensure your project is
              completed efficiently and exceeds your expectations from start to
              finish.
            </p>
          </div>

          {/* Process Steps */}
          <div className="max-w-7xl mx-auto relative">
            {/* Connection Lines */}
            <Image
              src="/Envobyte/Background.png"
              alt="Process"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />

            {/* Contact Button */}
            <div className="flex justify-center mt-24">
              <button className="px-16 py-4 bg-[#FF693B] hover:bg-orange-600 transition-colors text-white font-medium rounded">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
