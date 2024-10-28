"use client"
import React, { useState, useEffect } from "react";
import { FlipWords } from "./ui/flip-words";
import Image from 'next/image';
import image from '../../public/CC_logo.png';

function HeroText() {
  const words = ["better", "cute", "beautiful", "modern"];
  const [isMobile, setIsMobile] = useState(false);

  // Function to update the layout based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile as width <= 768px
    };
    
    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div
        className={`${
          isMobile ? "grid grid-rows-2 gap-4 items-center" : "grid grid-cols-2 gap-4 items-center"
        } text-2xl md:text-4xl  font-normal text-neutral-600 dark:text-neutral-400`}
      >
        <div className="flex justify-center">
          <Image src={image} alt="Aceternity Logo" width={300} height={150} />
        </div>
        <div className={`${isMobile ? "text-center" : "text-left"}`}>
          Beta 
          <FlipWords words={words} /> <br />
          Baap hu
        </div>
      </div>
    </div>
  );
}

export default HeroText;
