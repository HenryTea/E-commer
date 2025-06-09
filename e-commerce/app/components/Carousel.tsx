"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/61h3r7ODdhL.jpg",
  "/images/iphone-11-apple-by-ozmobiles-3_600x.webp",
  "/images/399694-smartphones-apple-iphone-11-10008711.png",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          src={images[current]}
          alt={`Phone image ${current + 1}`}
          width={600}
          height={350}
          className="object-cover w-full h-72"
          priority
        />
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md"
        aria-label="Next"
      >
        &#8594;
      </button>
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-blue-600" : "bg-gray-400"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 