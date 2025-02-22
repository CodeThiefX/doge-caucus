"use client";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Tokenomics from "./components/tokenomics";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <Hero />
      <About />
      <Banner />
      <Tokenomics />
    </div>
  );
}
