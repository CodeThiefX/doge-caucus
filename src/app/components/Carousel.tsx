"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleAutoPlay = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(handleAutoPlay, 5000);
    return () => clearInterval(interval);
  }, [handleAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div
      className="relative w-full aspect-square md:h-[700px] touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 bg-black/20 rounded-lg z-10" />
      <Image
        src={images[currentIndex]}
        alt={`Carousel image ${currentIndex + 1}`}
        fill
        objectFit="contain"
        className="object-cover rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105"
        priority
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <Button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white z-20"
        onClick={goToPrevious}
        size="icon"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white z-20"
        onClick={goToNext}
        size="icon"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
