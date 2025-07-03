import React, { useEffect, useRef } from "react";

export const TestimonialsSection = (): JSX.Element => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Manufacturer",
      company: "Kolkata Textiles Ltd",
      content: "MB TradeLink helped us expand our reach across 5 states. Their network is incredible and the support team is always helpful.",
      rating: 5,
      image: "/4.png"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Buyer",
      company: "Fashion Hub Retail",
      content: "Found reliable suppliers through MB TradeLink. The quality verification process gives us confidence in every purchase.",
      rating: 5,
      image: "/4.png"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Wholesaler",
      company: "Patel Trading Co",
      content: "Excellent platform for B2B connections. We've increased our business by 40% since partnering with MB TradeLink.",
      rating: 5,
      image: "/4.png"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Manufacturer",
      company: "Reddy Fabrics",
      content: "The end-to-end support from MB TradeLink is outstanding. They handle everything from introductions to logistics.",
      rating: 5,
      image: "/4.png"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Buyer",
      company: "Singh Garments",
      content: "Trusted platform for sourcing quality textiles. The verification process ensures we work with reliable partners.",
      rating: 5,
      image: "/4.png"
    },
    {
      id: 6,
      name: "Meera Iyer",
      role: "Manufacturer",
      company: "Iyer Textiles",
      content: "MB TradeLink has been instrumental in our growth. Their network spans across India and the support is exceptional.",
      rating: 5,
      image: "/4.png"
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let currentPosition = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      currentPosition -= speed;
      
      // Reset position when first set of testimonials has moved out
      if (currentPosition <= -carousel.scrollWidth / 2) {
        currentPosition = 0;
      }
      
      carousel.style.transform = `translateX(${currentPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="partners" className="relative w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <div className="w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <div className="w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Hear from our trusted network of manufacturers, buyers, and wholesalers about their experience with MB TradeLink.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex gap-6 md:gap-8"
            style={{ width: 'max-content' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-sm md:text-base text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Ready to join our network of trusted partners?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};
