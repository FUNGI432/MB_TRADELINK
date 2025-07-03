import React from "react";
import { Meteors } from "../../../../components/magicui/meteors";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-white text-gray-600 overflow-hidden">
      {/* Meteors Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <Meteors number={20} />
      </div>

      {/* MB TRADELINK Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-200 select-none">
          MB TRADELINK
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/BLACK LOGO.png"
                alt="MB TradeLink Logo"
                className="h-12 md:h-16 w-auto"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
              Connecting India's top manufacturers with leading retailers & wholesalers. Your trusted B2B textile trade partner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-4 md:mb-6">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Our Mission</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Leadership</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">News & Updates</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-4 md:mb-6">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">B2B Matching</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Quality Verification</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Logistics Support</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Payment Facilitation</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Business Development</a></li>
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-4 md:mb-6">Industries</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Sarees & Dress Materials</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Kurtis & Ethnic Wear</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Men's Clothing</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Home Textiles</a></li>
              <li><a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Industrial Textiles</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-8 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Head Office</h4>
              <p className="text-gray-600">
                Kolkata, West Bengal<br />
                India
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
              <p className="text-gray-600">
                Email: info@mbtradelink.com<br />
                Phone: +91 98765 43210
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
              <p className="text-gray-600">
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 md:pt-8 mt-8 md:mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm md:text-base text-gray-600">
              © 2024 MB TradeLink. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
