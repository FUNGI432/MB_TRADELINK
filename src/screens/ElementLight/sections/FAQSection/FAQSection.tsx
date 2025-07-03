import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export const FAQSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does MB TradeLink connect manufacturers and buyers?",
      answer: "We use a comprehensive matching algorithm that considers product requirements, location, capacity, and quality standards. Our team also personally verifies each connection to ensure compatibility and trust between partners."
    },
    {
      question: "What types of textile products do you handle?",
      answer: "We handle all types of textile products including sarees, dress materials, fabrics, home textiles, industrial textiles, and more. Our network covers traditional handloom to modern mill products across all price ranges."
    },
    {
      question: "Is there a verification process for manufacturers and buyers?",
      answer: "Yes, we have a thorough verification process that includes business registration checks, quality audits, site visits, and reference verification. This ensures you connect only with trusted and reliable partners."
    },
    {
      question: "What support services do you provide?",
      answer: "We provide end-to-end support including quality assurance, logistics coordination, payment facilitation, dispute resolution, and ongoing business development assistance. Our team is available 24/7 for any queries."
    },
    {
      question: "How much does it cost to join MB TradeLink?",
      answer: "We offer flexible pricing plans based on your business size and requirements. There are no hidden costs, and you only pay for the services you use. Contact us for a personalized quote."
    },
    {
      question: "Do you operate only in Kolkata or pan-India?",
      answer: "We operate pan-India with our headquarters in Kolkata. Our network spans across all major textile hubs including Surat, Mumbai, Delhi, Bangalore, Chennai, and many other cities."
    },
    {
      question: "How long does it take to find a suitable business partner?",
      answer: "Typically, we can connect you with suitable partners within 7-14 days. However, this timeline may vary based on your specific requirements and the complexity of the partnership."
    },
    {
      question: "What if I'm not satisfied with a connection?",
      answer: "We have a satisfaction guarantee policy. If you're not satisfied with a connection, we'll work to find you a better match at no additional cost. Your success is our priority."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="contact" className="relative w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <div className="w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <div className="w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Find answers to common questions about our services, processes, and how we can help grow your business.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-sm md:text-base lg:text-lg text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUpIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-600 transition-transform duration-200" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-transform duration-200" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 md:px-8 md:pb-6">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}; 