import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Footer links data
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Mission", href: "#mission" },
      { name: "Leadership", href: "#leadership" },
      { name: "Careers", href: "#careers" },
    ],
    services: [
      { name: "Manufacturer Onboarding", href: "#manufacturers" },
      { name: "Buyer Networking", href: "#buyers" },
      { name: "B2B Matchmaking", href: "#matchmaking" },
      { name: "Event Participation", href: "#events" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
    industries: [
      { name: "Sarees", href: "#sarees" },
      { name: "Dress Materials", href: "#dress-materials" },
      { name: "Kurtis", href: "#kurtis" },
      { name: "Men's Ethnic", href: "#mens-ethnic" },
      { name: "Women's Western", href: "#womens-western" },
      { name: "Fabrics", href: "#fabrics" },
    ],
  };

  // Contact information
  const contactInfo = {
    address: "8th Floor, 113/1B, Chittaranjan Ave, Kolutolla, Kolkata, West Bengal 700073",
    phone: "+91 33 4000 0000",
    email: "info@mbtradelink.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
  };

  // Social media links
  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "🔗" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Instagram", href: "#", icon: "📷" },
  ];

  return (
    <footer className="relative w-full bg-white text-gray-800 overflow-hidden">
      {/* Background MB TRADELINK watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-gray-200 text-8xl font-bold opacity-25 select-none" style={{ fontSize: '8rem', lineHeight: 1 }}>
          MB TRADELINK
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-6 py-12">
          {/* Company Info */}
          <div className="lg:w-1/5">
            <div className="mb-4">
              <img
                src="/BLACK LOGO.png"
                alt="MB TradeLink"
                className="h-10 w-auto mb-3"
              />
              <p className="text-gray-600 leading-relaxed text-xs">
                MB TradeLink is the trusted bridge between India's top manufacturers and leading retailers & wholesalers, 
                streamlining B2B connections and unlocking growth opportunities across the textile industry.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-1">
              <div className="flex items-start space-x-2">
                <div className="w-3 h-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600 text-xs">{contactInfo.address}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-xs">{contactInfo.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-xs">{contactInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:w-1/5">
            <h3 className="text-sm font-semibold mb-3 text-gray-900">Company</h3>
            <ul className="space-y-1">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:w-1/5">
            <h3 className="text-sm font-semibold mb-3 text-gray-900">Services</h3>
            <ul className="space-y-1">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div className="lg:w-1/5">
            <h3 className="text-sm font-semibold mb-3 text-gray-900">Industries</h3>
            <ul className="space-y-1">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-500 text-sm">
                © 2024 MB TradeLink. All rights reserved.
              </p>
              <div className="flex space-x-4">
                {footerLinks.support.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-200 transition-all duration-300"
                  title={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
