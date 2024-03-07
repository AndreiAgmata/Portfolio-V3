"use client";
import React, { useEffect, useRef } from "react";
import "./Navbar.scss";
import gsap from "gsap";
import NavMenu from "../NavMenu/NavMenu";
import SplitType from "split-type";
import { showLogo, hideLogo } from "@/utils/AnimateLogo";
import { animateBurger } from "@/utils/AnimateBurger";
import { showCloseButton } from "@/utils/AnimateCloseBtn";
import ScrollTrigger from "gsap/ScrollTrigger";

function Navbar() {
  let navMenuRef = useRef();
  let burgerRef = useRef();
  let logoRef = useRef();

  const openMenu = () => {
    console.log("clicked");
    const linkText = new SplitType(".link");
    const tl = new gsap.timeline();
    const q = new gsap.utils.selector(navMenuRef);

    tl.to(q(".nav-menu"), {
      zIndex: 999,
      duration: 0,
    })
      .to(q(".menu-bg"), {
        width: "100%",
        duration: 0.75,
        ease: "power4.out",
      })
      .from(
        q(".word"),
        {
          yPercent: 100,
          duration: 1.5,
          stagger: 0.15,
          ease: "expo.out",
        },
        "<0.1"
      )
      .fromTo(
        q(".horizontal-line"),
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 1.5,
          ease: "expo.out",
        },
        "+0.15"
      )
      .fromTo(
        q(".menu-contact-btn"),
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 1,
          ease: "expo.out",
        },
        "+0.15"
      )
      .fromTo(
        q(".social-media-links .icon"),
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: "expo.out",
        },
        "<0.25"
      );

    showLogo("menuLogoPath1", "menuLogoPath2", 0.25);
    showCloseButton("menuClosePath1", "menuClosePath2", 0.5);
  };

  //change burger colour
  useEffect(() => {
    const trigger = document.getElementsByClassName("hero");
    gsap.registerPlugin(ScrollTrigger);
    const ctx = new gsap.context(() => {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "bottom center",
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
      const q = new gsap.utils.selector(burgerRef);
      tl.to(q(".burgerPath"), {
        stroke: "black",
        duration: 0.5,
        ease: "expo.out",
      });
    });

    return () => ctx.revert();
  });

  //change logo colour
  useEffect(() => {
    const trigger = document.getElementsByClassName("hero");
    gsap.registerPlugin(ScrollTrigger);
    const ctx = new gsap.context(() => {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "bottom center-=380",
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
      const q = new gsap.utils.selector(logoRef);
      tl.to(q(".logoPath"), {
        stroke: "black",
        duration: 0.5,
        ease: "expo.out",
      });
    });

    return () => ctx.revert();
  });

  useEffect(() => {
    showLogo("logoPath1", "logoPath2");
  }, []);

  return (
    <>
      <div className="navBar">
        <div className="items w-100 position-relative">
          <div className="logo-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 731 670"
              ref={(el) => (logoRef = el)}
            >
              <path
                id="logoPath1"
                d="M70.9182 599.682L363.824 70.4354"
                stroke="white"
                strokeWidth="130"
                strokeLinecap="round"
                opacity={0}
                className="logoPath"
              />
              <path
                id="logoPath2"
                d="M660.906 599.682L500.21 309.324"
                stroke="white"
                strokeWidth="130"
                opacity={0}
                strokeLinecap="round"
                className="logoPath"
              />
            </svg>
          </div>
          <div
            className="burger-wrapper"
            onClick={openMenu}
            onMouseEnter={() =>
              animateBurger("burgerPath1", "burgerPath2", "burgerPath3")
            }
            ref={(el) => (burgerRef = el)}
          >
            <svg
              //original
              // viewBox="0 0 151 65"
              viewBox="0 0 230 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5H230"
                stroke="white"
                strokeWidth={10}
                strokeLinecap="round"
                strokeLinejoin="round"
                id="burgerPath1"
                className="burgerPath"
              />
              <path
                d="M5 45H230"
                stroke="white"
                strokeWidth={10}
                strokeLinecap="round"
                strokeLinejoin="round"
                id="burgerPath2"
                className="burgerPath"
              />
              <path
                d="M5 85H230"
                stroke="white"
                strokeWidth={10}
                strokeLinecap="round"
                strokeLinejoin="round"
                id="burgerPath3"
                className="burgerPath"
              />
            </svg>
          </div>
        </div>
        <div className="divider"></div>
      </div>
      <div className="nav-menu-wrapper" ref={(el) => (navMenuRef = el)}>
        <NavMenu navMenuRef={navMenuRef} />
      </div>
    </>
  );
}

export default Navbar;

{
  /* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 642 641"
            >
              <path
                id="myPath"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={150}
                opacity={0}
                d="M76 565 321 75l245 490"
              />
            </svg> */
}
