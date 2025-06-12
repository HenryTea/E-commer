'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    name: '911',
    image: '/images/992_carousel.jpg',
    description: 'Độc Bản. Kinh Điển.',
    price: '8.870.000.000 VNĐ'
  },
  {
    id: 2,
    name: '718',
    image: '/images/718_carousel.jpg',
    description: 'Thể thao thuần khiết',
    price: '3.850.000.000 VNĐ'
  },
  {
    id: 3,
    name: 'Taycan',
    image: '/images/Taycan_carousel.jpg',
    description: 'Choáng ngợp cảm xúc',
    price: '4.620.000.000 VNĐ'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay for darkening */}
          <div className="absolute inset-0 bg-opacity-40" />
          {/* Text Content in Bottom Left */}
          <div className="absolute bottom-16 left-16 flex flex-col items-start z-10 group">
            <h1 className="text-5xl font-bold mb-2 text-white flex items-center transition-colors duration-200 group-hover:text-red-600">
              <span className="text-red-600 text-4xl mr-2">&gt;</span>{slide.name}
            </h1>
            <p className="text-2xl font-semibold mb-1 text-white drop-shadow transition-colors duration-200 group-hover:text-red-600">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-20"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-20"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-red-600' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel; 