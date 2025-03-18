import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
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
      <div className="py-16 max-w-[1106px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[#001d80]/30 rounded-lg p-6 max-w-[523px] border border-[#F1F3F74D]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2.5 bg-[#001d80]/20 border border-[#F1F3F74D]/30 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="support@envobyte.com"
                  className="w-full p-2.5 bg-[#001d80]/20 border border-[#F1F3F74D]/30 rounded-md text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (867) 777 2477"
                  className="w-full p-2.5 bg-[#001d80]/20 border border-[#F1F3F74D]/30 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Envobyte"
                  className="w-full p-2.5 bg-[#001d80]/20 border border-[#F1F3F74D]/30 rounded-md text-white"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full p-2.5 bg-[#001d80]/20 border border-[#F1F3F74D]/30 rounded-md text-white"
              ></textarea>
            </div>

            <button className="bg-[#19213D14]/30 hover:bg-[#19213D14] cursor-pointer border border-[#F1F3F74D]/30 px-5 py-2.5 rounded-md text-white flex items-center gap-2">
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
            <h2 className="text-5xl font-bold mb-10">
              Let us know what <br /> you think!
            </h2>
            <p className="text-gray-300 mb-6 text-base">
              Got something on your mind? Share it with us! Drop a message, and
              we'll respond quickly to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[#F1F3F726]/30 pb-4 w-[340px]">
                <div className=" ">
                  <Image
                    src="/Envobyte/message.png"
                    alt="Footer Icon"
                    width={46}
                    height={46}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Business:</p>
                  <a
                    href="mailto:support@envobyte.com"
                    className="text-white flex items-center gap-2"
                  >
                    support@envobyte.com
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#4D5AE8"
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

              <div className="flex items-center gap-3 border-b border-[#F1F3F726]/30 pb-4 w-[340px]">
                <div className="  ">
                  <Image
                    src="/Envobyte/whatsapp-b.png"
                    alt="Footer Icon"
                    width={46}
                    height={46}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp:</p>
                  <a
                    href="tel:+18677772477"
                    className="text-white flex items-center gap-2"
                  >
                    +1 (867) 777 2477
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#4D5AE8"
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
                <div className=" ">
                  <Image
                    src="/Envobyte/linkeding.png"
                    alt="Footer Icon"
                    width={46}
                    height={46}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn:</p>
                  <a
                    href="https://www.linkedin.com/company/envobyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-2"
                  >
                    www.linkedin.com/company/envobyte
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#4D5AE8"
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
      <div className="border-t border-[#E5E7EB33]/30 py-10">
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
                We are an IT Company. We help
                <br />
                businesses to bring ideas to life
                <br />
                easily and affordably.
              </p>
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
                  <FaRegEnvelope className="w-5 h-5" color="#FF7636" />
                  <a
                    href="mailto:support@envobyte.com"
                    className="hover:text-white"
                  >
                    support@envobyte.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <FaWhatsapp className="w-5 h-5" color="#FF7636" />
                  <a href="tel:+18677772477" className="hover:text-white">
                    +1 (867) 777 2477
                  </a>
                </li>
                {/* Social Media */}
                <li className="flex gap-3 mt-4">
                  <a
                    href="#"
                    className=" p-2 rounded-md bg-blue-700 transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-md bg-blue-600 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className=" p-2 rounded-md bg-pink-600 transition-colors"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className=" p-2 rounded-md bg-blue-400 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className=" p-2 rounded-md bg-red-600 transition-colors"
                  >
                    <FaPinterest className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#E5E7EB33]/30 py-4">
        <p className="text-center text-white text-sm">
          2025 - ENVOBYTE. All rights are reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
