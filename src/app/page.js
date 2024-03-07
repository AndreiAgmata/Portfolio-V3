"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/NavBar/Navbar";
import Projects from "@/components/Projects/Projects";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { hideLogo, showLogo } from "@/utils/AnimateLogo";

export default function Home() {
  let preloaderRef = useRef();

  useEffect(() => {
    showLogo("preloaderLogoPath1", "preloaderLogoPath2");

    setTimeout(() => {
      hideLogo("preloaderLogoPath1", "preloaderLogoPath2");
    }, 2000);
  }, []);

  useEffect(() => {
    const ctx = new gsap.context(() => {
      const tl = new gsap.timeline();

      tl.to(preloaderRef, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
        ease: "expo.out",
        delay: 3,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <main className="">
      <div
        className="pre-loader bg-black d-flex justify-content-center align-items-center position-fixed"
        style={{ width: "100%", height: "100dvh", zIndex: 9999 }}
        ref={(el) => (preloaderRef = el)}
      >
        <div
          className="logo-wrapper"
          style={{ width: "12rem", height: "13rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 731 670"
          >
            <path
              id="preloaderLogoPath1"
              d="M70.9182 599.682L363.824 70.4354"
              stroke="white"
              strokeWidth="130"
              strokeLinecap="round"
              className="logoPath"
              opacity={0}
            />
            <path
              id="preloaderLogoPath2"
              d="M660.906 599.682L500.21 309.324"
              stroke="white"
              strokeWidth="130"
              strokeLinecap="round"
              className="logoPath"
              opacity={0}
            />
          </svg>
        </div>
      </div>

      <>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </>
    </main>
  );
}
