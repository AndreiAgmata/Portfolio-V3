"use client";
import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import SplitType from "split-type";
import gsap from "gsap";
import Link from "next/link";

function Hero() {
  let preloaderRef = useRef();
  let animatedLineRef = useRef();
  // background effect
  // useEffect(() => {
  //   const heroSection = document.getElementById("hero");
  //   const handlePointerMove = (e) => {
  //     const { currentTarget: el, clientX: x, clientY: y } = e;
  //     const {
  //       top: t,
  //       left: l,
  //       width: w,
  //       height: h,
  //     } = el.getBoundingClientRect();
  //     el.style.setProperty("--posX", x - l - w / 2);
  //     el.style.setProperty("--posY", y - t - h / 2);
  //   };

  //   document.body.addEventListener("pointermove", handlePointerMove);
  // }, []);

  // intro animation
  useEffect(() => {
    const introText = new SplitType(".text-intro");
    const descriptionText = new SplitType(".text-description");
    const seeMyWorkText = new SplitType(".see-my-work .text");

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
        )
        .from(".see-my-work", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1,
          ease: "expo.out",
        })
        .from(".see-my-work .text .word", {
          yPercent: 110,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
        });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = new gsap.context(() => {
      const tl = new gsap.timeline({ repeat: -1 });

      tl.fromTo(
        animatedLineRef,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          duration: 1,
          ease: "none",
        }
      ).to(animatedLineRef, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  });

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
        <div className="content container h-100 py-0 d-flex flex-column justify-content-center align-items-start position-relative ">
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
          <Link
            href={"#projects"}
            className="see-my-work position-absolute m-0 pb-5 ps-3 border-start border-1 border-secondary-subtle"
          >
            <p className="text">SEE MY WORK</p>
            <div
              className="animated-line position-absolute "
              ref={(el) => (animatedLineRef = el)}
            ></div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Hero;
