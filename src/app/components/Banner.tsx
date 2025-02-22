"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-10" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1B42] to-[#0E1B42]" />

      <div className="relative container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content section */}
          <div className="space-y-6 text-white z-10">
            {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm">Next Generation Token</span>
            </div> */}

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              <img src="/banner-title.png" alt="logo" className="w-[450px]" />
            </h1>

            <p className="text-lg text-gray-300">
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mr-1">
                DOGE CAUCUS:
              </span> */}
              When the system’s crooked and the funds vanish, we’ve got the
              ultimate counterpunch—memes. Doge Caucus is out here, unmasking
              corruption and tracking every misspent dime. Forget endless
              debates or dusty reports—we’ve got blockchain proof and savage
              shitposts. Chuckle if you want, but mark our words: the memes
              always come out on top.
            </p>

            {/* <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity flex items-center">
                CHART
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors">
                BUY NOW
              </button>
            </div> */}
          </div>

          {/* Image section */}
          <div className="relative p-6">
            <div className="relative aspect-square">
              <video
                src="/video.MOV"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover rounded-2xl shadow-2xl w-full h-full"
              />
              {/* Floating element */}
              <div className=" absolute -bottom-8 -left-8 w-2/3 aspect-video">
                <video
                  src="/video2.MOV"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-2xl shadow-2xl w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
