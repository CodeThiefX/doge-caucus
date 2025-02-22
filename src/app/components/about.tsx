import React from "react";
import { AnimatedElement } from "./AnimatedElement";
import Carousel from "./Carousel";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Rocket, TrendingUp } from "lucide-react";

export const About = () => {
  const carouselImages = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg",
  ];

  const stats = [
    {
      label: "Market Cap",
      value: "$2.5M",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    { label: "Holders", value: "2.5K+", icon: <Shield className="w-5 h-5" /> },
    { label: "Price", value: "$0.0001", icon: <Rocket className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1B42] via-blue-900/20 to-[#0E1B42]" />

      {/* Glowing orbs in background */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              background: i === 0 ? "#FFD700" : i === 1 ? "#0066FF" : "#FF0000",
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animation: `float-${i} 10s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 space-y-12">
        {/* First Row: Ben's Story and Carousel */}
        <div className="flex flex-col-reverse md:flex-row items-start gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <AnimatedElement>
              <div className="relative group">
                <Image
                  src="/mission.png"
                  alt="Mission"
                  width={1000}
                  height={1000}
                  className="h-28 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </AnimatedElement>

            <AnimatedElement>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-yellow-400/50 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-xl font-bold text-yellow-400">
                    The Mission
                  </h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We’re doing what the government can’t (or won’t)—sniffing out
                  squandered cash, calling out the nonsense, and delivering
                  truth with a side of dank memes. While the suits stumble over
                  red tape, we’re shining a spotlight on the grift, one epic
                  shitpost at a time. No scam, no sleaze, no shadowy deal
                  escapes the Doge Caucus. Stay sharp. Stay real, Stay Doge.
                </p>
              </div>
            </AnimatedElement>
          </div>

          {/* Right Carousel */}
          <div className="w-full md:w-1/2">
            <AnimatedElement>
              <div className="">
                <Carousel images={carouselImages} />
                {/* <div className="flex justify-center gap-2 mt-4">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      className="w-2 h-2 rounded-full bg-white/20 hover:bg-yellow-400 transition-colors duration-300"
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div> */}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, 20px);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 20px);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
