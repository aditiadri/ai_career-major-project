"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const rotatingFeatures = [
  "resume builder",
  "cover letter generator",
  "interview preparation",
  "AI mock interviews",
  "career insights",
];

const HeroSection = () => {
  const imageRef = useRef(null);

  // ✅ Feature text animation
  useEffect(() => {
    const featureText = document.getElementById("featureText");
    let index = 0;

    const interval = setInterval(() => {
      if (featureText) {
        featureText.style.opacity = "0";

        setTimeout(() => {
          featureText.textContent = rotatingFeatures[index];
          featureText.style.opacity = "1";
          index = (index + 1) % rotatingFeatures.length;
        }, 300);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // ✅ Scroll logic (your existing one)
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
      <div className="bg-transparent border border-gray-300 rounded-2xl shadow-md p-8 w-full max-w-3xl text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
            Your AI Coach for
            <br />
            Professional Success
          </h1>

          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with AI-powered tools:&nbsp;
            <span
              className="text-primary font-semibold transition-opacity duration-700"
              id="featureText"
            >
              resume builder
            </span>
          </p>
        </div>

        <div className="flex justify-center space-x-4">
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

export default HeroSection;
