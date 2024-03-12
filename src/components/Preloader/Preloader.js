"use client";
import { hideLogo, showLogo } from "@/utils/AnimateLogo";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.scss";

function Preloader() {
  let preloaderRef = useRef();

  useEffect(() => {
    showLogo("preloaderLogoPath1", 0.75);
    hideLogo("preloaderLogoPath1", 2);
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

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div
      className="pre-loader d-flex justify-content-center align-items-center"
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
          width={"100%"}
          height={"100%"}
          viewBox="0 0 731 670"
        >
          <path
            id="preloaderLogoPath1"
            d="M71 600L366 70L661 600"
            stroke="white"
            strokeWidth="130"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="logoPath"
            opacity={0}
          />
        </svg>
      </div>
    </div>
  );
}

export default Preloader;
