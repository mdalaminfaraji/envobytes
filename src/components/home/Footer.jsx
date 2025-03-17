import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className=" text-white"
      style={{
        backgroundImage: "url('/Envobyte/footer-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Contact Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-[#001d80]/30 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2.5 bg-[#001d80]/20 border border-[#001d80]/40 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="support@envobyte.com"
                  className="w-full p-2.5 bg-[#001d80]/20 border border-[#001d80]/40 rounded-md text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (867) 777 2477"
                  className="w-full p-2.5 bg-[#001d80]/20 border border-[#001d80]/40 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Envobyte"
                  className="w-full p-2.5 bg-[#001d80]/20 border border-[#001d80]/40 rounded-md text-white"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full p-2.5 bg-[#001d80]/20 border border-[#001d80]/40 rounded-md text-white"
              ></textarea>
            </div>

            <button className="bg-[#FF693B] hover:bg-orange-600 px-5 py-2.5 rounded-md text-white flex items-center gap-2">
              Send message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">
              Let us know what you think!
            </h2>
            <p className="text-gray-300 mb-6">
              Got something on your mind? Share it with us! Drop a message, and
              we'll respond quickly to assist you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Business:</p>
                  <a
                    href="mailto:support@envobyte.com"
                    className="text-white flex items-center gap-1"
                  >
                    support@envobyte.com
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp:</p>
                  <a
                    href="tel:+18677772477"
                    className="text-white flex items-center gap-1"
                  >
                    +1 (867) 777 2477
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.39 0-1.601 1.094-1.601 2.226v4.252H8.014v-8.59h2.557v1.181h.037c.355-.675 1.227-1.387 2.534-1.387 2.712 0 3.213 1.804 3.213 4.152v4.644zm-13.297 0h2.675V7.748H3.041v8.59zM4.379 3A1.55 1.55 0 002.83 4.549a1.55 1.55 0 001.55 1.549 1.55 1.55 0 001.551-1.549A1.55 1.55 0 004.38 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn:</p>
                  <a
                    href="https://www.linkedin.com/company/envobyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-1"
                  >
                    www.linkedin.com/company/envobyte
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <Image
                  src="/Envobyte/logo-white.png"
                  alt="Envobyte Logo"
                  width={130}
                  height={40}
                />
              </div>
              <p className="text-gray-400 mb-4">
                We are an IT Company. We help businesses to bring ideas to life
                easily and affordably.
              </p>

              {/* Social Media */}
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="bg-[#001d80]/30 p-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-[#001d80]/30 p-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-[#001d80]/30 p-2 rounded-md hover:bg-pink-600 transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-[#001d80]/30 p-2 rounded-md hover:bg-blue-400 transition-colors"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-[#001d80]/30 p-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  <FaPinterest className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Learn More */}
            <div>
              <h4 className="text-white font-medium mb-4">Learn More</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Combo Offer
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Service Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Envobyte Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-medium mb-4">Get in Touch</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:support@envobyte.com"
                    className="hover:text-white"
                  >
                    support@envobyte.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+18677772477" className="hover:text-white">
                    +1 (867) 777 2477
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            2023 - ENVOBYTE. All rights are reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
