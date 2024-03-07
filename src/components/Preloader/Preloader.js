"use client";
import { hideLogo, showLogo } from "@/utils/AnimateLogo";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.scss";

function Preloader() {
  let preloaderRef = useRef();

  useEffect(() => {
    showLogo("preloaderLogoPath1", "preloaderLogoPath2", 0.5);

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
    <div
      className="pre-loader bg-black d-flex justify-content-center align-items-center"
      ref={(el) => (preloaderRef = el)}
    >
      <div
        className="logo-wrapper"
        style={{
          width: "15vw",
          height: "15vw",
          maxWidth: "12rem",
          maxHeight: "12rem",
        }}
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
  );
}

export default Preloader;
