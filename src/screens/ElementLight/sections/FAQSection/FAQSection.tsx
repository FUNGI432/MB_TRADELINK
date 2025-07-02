import React from "react";

export const FAQSection = (): JSX.Element => {
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

  return (
    <section className="relative w-full py-20 bg-[#f9fafb] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl w-full space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}; 