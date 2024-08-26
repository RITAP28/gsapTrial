import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../landing/Hero";
import Updates from "../landing/Updates";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import AboutUs from "../landing/AboutUs";

const Landing = () => {
  const bgImage = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(bgImage.current, {
      y: -2,
      delay: 0.3,
      duration: 0.5,
      opacity: 0,
    })
  }, []);
  return (
    <div className="w-full bg-black">
      <div ref={bgImage} className=" bg-concert bg-contain">
        <div className="w-full h-[12vh]">
          <Navbar />
        </div>
        <div className="w-full pb-[2rem]">
          <Updates />
        </div>
        <div className="w-full h-[86vh]">
          <Hero />
        </div>
        <div className="w-full">
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

export default Landing;
