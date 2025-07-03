import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Testimonials data
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Textile Manufacturer",
      company: "Kolkata Textiles Ltd",
      content: "MB TradeLink transformed our business. We connected with 50+ new buyers within 3 months and expanded our reach across 5 states. The platform is incredibly user-friendly and the support team is always helpful.",
      rating: 5,
      image: "/saree_products/1.png"
    },
    {
      name: "Priya Sharma",
      position: "Fashion Retailer",
      company: "Elegance Boutique",
      content: "Finding reliable suppliers was always a challenge until we discovered MB TradeLink. The quality verification and transparent pricing have made sourcing much easier. Highly recommended for any fashion business.",
      rating: 5,
      image: "/saree_products/2.png"
    },
    {
      name: "Amit Patel",
      position: "Export Manager",
      company: "Surat Silk Exports",
      content: "The B2B networking events organized by MB TradeLink have been game-changing. We've secured international contracts worth over ₹2 crores through their platform. Professional team with excellent service.",
      rating: 5,
      image: "/saree_products/3.png"
    },
    {
      name: "Sneha Reddy",
      position: "Designer",
      company: "Artisan Creations",
      content: "As a small designer, I was struggling to find quality fabric suppliers. MB TradeLink connected me with authentic weavers and helped me scale my business. The platform truly supports local artisans.",
      rating: 5,
      image: "/saree_products/4.png"
    },
    {
      name: "Vikram Singh",
      position: "Procurement Head",
      company: "National Retail Chain",
      content: "We've been using MB TradeLink for over 2 years now. The platform's quality assurance and timely delivery have made it our go-to source for textile procurement. Excellent business partner.",
      rating: 5,
      image: "/saree_products/5.png"
    },
    {
      name: "Meera Iyer",
      position: "Founder",
      company: "Heritage Weaves",
      content: "MB TradeLink helped us preserve traditional weaving techniques while connecting us with modern markets. Their commitment to supporting artisans while promoting business growth is commendable.",
      rating: 5,
      image: "/saree_products/6.png"
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let scrollPosition = 0;
    const cardWidth = 400; // Width of each card
    const gap = 32; // Gap between cards (8 * 4px)
    const cardTotalWidth = cardWidth + gap;
    const originalTestimonialsLength = testimonials.length;
    const resetPosition = originalTestimonialsLength * cardTotalWidth;
    const scrollSpeed = 1.5; // Fixed speed

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one set of testimonials
      if (scrollPosition >= resetPosition) {
        scrollPosition = 0;
      }
      
      carousel.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [testimonials.length]);

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <div className="w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <div className="w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why manufacturers and buyers across India trust MB TradeLink for their B2B textile connections and growth.
          </p>
        </div>

        {/* Endless Carousel with increased frame size */}
        <div className="relative mb-20 py-12">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-hidden"
            style={{ scrollBehavior: 'smooth' }}
          >
            {duplicatedTestimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 flex-shrink-0"
                style={{ minWidth: '400px', maxWidth: '400px' }}
              >
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of manufacturers and buyers who trust MB TradeLink for their B2B connections and growth.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
