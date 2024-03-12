"use client";
import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import SplitType from "split-type";
import gsap from "gsap";

function Hero() {
  let preloaderRef = useRef();
  // background effect
  useEffect(() => {
    const heroSection = document.getElementById("hero");
    const handlePointerMove = (e) => {
      const { currentTarget: el, clientX: x, clientY: y } = e;
      const {
        top: t,
        left: l,
        width: w,
        height: h,
      } = el.getBoundingClientRect();
      el.style.setProperty("--posX", x - l - w / 2);
      el.style.setProperty("--posY", y - t - h / 2);
    };

    document.body.addEventListener("pointermove", handlePointerMove);
  }, []);

  // intro animation
  useEffect(() => {
    const introText = new SplitType(".text-intro");
    const descriptionText = new SplitType(".text-description");

    const ctx = new gsap.context(() => {
      const tl = new gsap.timeline();
      tl.to(preloaderRef, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
        ease: "expo.out",
        delay: 2.5,
      })
        .from(".text-intro .word", {
          yPercent: 100,
          duration: 2,
          ease: "expo.out",
          stagger: 0.15,
        })
        .from(
          ".text-description .word",
          {
            yPercent: 100,
            duration: 1.5,
            ease: "expo.out",
            stagger: 0.15,
          },
          "<0.35"
        )
        .from(
          ".hero-resume-btn",
          {
            yPercent: 110,
            duration: 1.5,
            ease: "expo.out",
          },
          "<1.5"
        );
    });

    return () => ctx.revert();
  }, []);

  const openPdfInNewTab = () => {
    const pdfUrl = "resume.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <div
        className="background position-fixed"
        ref={(el) => (preloaderRef = el)}
      ></div>
      <section className="hero" id="hero">
        <div className="content container h-100 d-flex flex-column justify-content-center align-items-start">
          <p className="text-intro fw-medium">HELLO THERE, I&apos;M ANDREI.</p>
          <p className="text-description fw-medium mt-3">
            I craft innovative <br /> digital experiences <br /> for the web.
          </p>
          <div className="button-wrapper mt-4">
            <button
              className="btn btn-outline-light rounded-pill hero-resume-btn"
              onClick={openPdfInNewTab}
            >
              View My Resume
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
