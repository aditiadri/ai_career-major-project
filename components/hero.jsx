"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const rotatingFeatures = [
  "ATS Resume Builder",
  "Cover Letter Generator",
  "Interview Preparation",
  "AI Mock Interviews",
  "Career Insights",
];

const HeroSection = () => {
  const imageRef = useRef(null);
  const [currentFeature, setCurrentFeature] = useState(rotatingFeatures[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let index = 1;

    const interval = setInterval(() => {
      setFade(false); 

      setTimeout(() => {
        setCurrentFeature(rotatingFeatures[index]);
        setFade(true);
        index = (index + 1) % rotatingFeatures.length;
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (imageElement) {
        if (scrollPosition > scrollThreshold) {
          imageElement.classList.add("scrolled");
        } else {
          imageElement.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-30 md:pt-40 pb-10 flex justify-center">
      <div className="bgc border border-gray-400 rounded-2xl shadow-lg p-8 w-full max-w-4xl text-center space-y-6">
        <div className="space-y-4">
          <h1 className="font-bold font-sans text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-300">
            Your <span style={{ color: "#19e9c2" }} className="font-bold"> AI Coach </span>for
            <br />
            Professional Success
          </h1>

          <p className="mx-auto text-muted-foreground md:text-xl whitespace-nowrap overflow-auto pt-5">
            Advance your career with AI-powered tools like:&nbsp;
            <span
              className={`font-semibold transition-opacity duration-500`}
              style={{
                color: "#19e9c2",
                opacity: fade ? 1 : 0,
              }}
              id="featureText"
            >
              {currentFeature}
            </span>
          </p>
        </div>

        <div className="flex justify-center space-x-4 pt-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 animate-bounce">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
export default HeroSection;
