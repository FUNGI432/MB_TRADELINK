import React, { useState } from "react";

export const FAQSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Placeholder FAQ data
  const faqs = [
    {
      question: "What is MB TradeLink?",
      answer:
        "MB TradeLink is the trusted bridge between India's top manufacturers and leading retailers & wholesalers, streamlining B2B connections and unlocking growth opportunities.",
    },
    {
      question: "How do I partner with MB TradeLink?",
      answer:
        "Simply use the 'Partner With Us' form or contact us directly. We'll guide you through onboarding and connect you to our network.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve a wide range of B2B segments including Sarees, Dress Materials, Kurtis, Men's Ethnic, Women's Western, and Fabrics.",
    },
    {
      question: "Is there a fee to join?",
      answer:
        "Please contact us for the latest details on partnership models and any applicable fees.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 bg-[#f9fafb] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl w-full space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <h3 className="font-semibold text-lg text-gray-900 pr-4">{faq.question}</h3>
              <div className="flex-shrink-0">
                <div className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                  openIndex === idx ? 'rotate-45' : 'rotate-0'
                }`}>
                  <svg 
                    className="w-6 h-6 text-blue-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 4v16m8-8H4" 
                    />
                  </svg>
                </div>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 