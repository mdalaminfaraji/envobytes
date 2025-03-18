"use client";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
export default function FrequentlyAskedQuestions() {
  // FAQ data
  const faqs = [
    {
      id: "01",
      question: "What Is Included In Your Web Development Service?",
      answer:
        "Our web development service includes website design, frontend and backend development, responsive design, database integration, content management system setup, basic SEO optimization, browser compatibility testing, and post-launch support. We work closely with you to ensure all your specific requirements are met.",
    },
    {
      id: "02",
      question: "What Technologies Do You Use For Web Development?",
      answer:
        "We use modern technologies such as WordPress, HTML5, CSS3, Java Script, PHP, and MySQL to ensure your website is scalable, secure, and responsive.",
    },
    {
      id: "03",
      question: "What If I Need Ongoing Support After The Website Is Launched?",
      answer:
        "We offer various maintenance packages that include regular updates, security monitoring, performance optimization, content updates, and technical support. We can customize a support plan based on your specific needs to ensure your website continues to run smoothly.",
    },
    {
      id: "04",
      question: "Can I Customize My Website According To My Business Needs?",
      answer:
        "Absolutely! We specialize in custom web development tailored to your specific business requirements. From custom functionalities to unique design elements, we can implement features that align perfectly with your business objectives and brand identity.",
    },
    {
      id: "05",
      question: "Do You Offer SEO Services As Part Of Your Web Development?",
      answer:
        "Yes, we offer SEO services as part of our web development packages. This includes on-page optimization, keyword research, meta tags setup, schema markup, performance optimization, and making sure your website is search engine friendly from the ground up.",
    },
  ];

  // State to track which FAQ is expanded
  const [expandedFaq, setExpandedFaq] = useState("02"); // Default to having the second one open

  // Toggle FAQ expansion
  const toggleFaq = (id) => {
    if (expandedFaq === id) {
      setExpandedFaq(null); // Collapse if already expanded
    } else {
      setExpandedFaq(id); // Expand the clicked FAQ
    }
  };

  return (
    <section className="py-48 bg-white">
      <div className="container mx-auto px-4">
        {/* FAQ Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#0A2C8C] mb-8">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 pt-10 pb-5">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#0C52DB] font-medium">{faq.id}</span>
                  <h3
                    className={`font-medium ${
                      expandedFaq === faq.id
                        ? "text-[#0A2C8C] "
                        : "text-[#6D758F]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>
                <span className="text-gray-400">
                  {expandedFaq === faq.id ? (
                    <RxCross2 size={20} />
                  ) : (
                    <BsPlus size={20} />
                  )}
                </span>
              </div>

              {/* FAQ Answer */}
              {expandedFaq === faq.id && (
                <div className="mt-3 pl-10 text-gray-600">
                  <p className="max-w-2xl">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
