"use client";
import React, { useEffect, useRef } from "react";
import "./About.scss";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

function About() {
  let trigger = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const sectionTitle = new SplitType(".about .content .header");
      const paragraph = new SplitType(".about .content .paragraph");
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top center+=100",
          //   markers: true,
          //   toggleActions: "play none none reverse",
        },
      });

      const q = new gsap.utils.selector(trigger);

      tl.from(q(".header .word"), {
        yPercent: 100,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.25,
      })
        .from(
          q(".paragraph .word"),
          {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.05,
          },
          "<0.15"
        )
        .from(
          q(".main-image"),
          {
            opacity: 0,
            scale: 1.2,
            duration: 3,
            ease: "expo.in",
          },
          "<0.15"
        )
        .from(q(".resume-btn"), {
          yPercent: 100,
          duration: 1,
          ease: "expo.out",
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="about bg-white" ref={(el) => (trigger = el)}>
      <div className="logo-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 605 334"
        >
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={43}
            d="M22 195.4 146.396 54.708M200.859 235.096l-29.186-98.811M480.281 311.581l41.252-45.832M583.002 125.055 478.048 22"
          />
        </svg>
      </div>
      <div className="content container">
        <h1 className="header">About Me</h1>
        <div className="row">
          <div className="text-column mt-5 col-12 col-lg-5 d-flex flex-column align-items-start justify-content-center ">
            <p className="paragraph fw-light">
              My name is Andrei Agmata, a web developer and a passionate
              advocate for user-centric design. My work revolves around my
              unwavering belief that exceptional user experience lies at the
              core of every successful product.
            </p>

            <p className="paragraph fw-light mt-4">
              Armed with a solid education in computer science, coupled with a
              profound understanding of design thinking and user psychology, I
              immerse myself in the intricate art of crafting seamless,
              intuitive experiences.
            </p>

            <div className="button-wrapper mt-4">
              <button className="btn btn-dark rounded-pill resume-btn">
                View My Resume
              </button>
            </div>
          </div>

          <div className="col image-column d-flex justify-content-center align-items-center mt-5 position-relative ">
            <div className="image-wrapper position-relative rounded-pill">
              <Image
                src={"/me.png"}
                alt="me"
                fill
                quality={100}
                style={{ objectFit: "contain", zIndex: 2 }}
                className="rounded-circle main-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
