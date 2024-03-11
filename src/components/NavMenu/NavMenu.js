"use client";
import React, { useRef } from "react";
import "./NavMenu.scss";
import gsap from "gsap";
import { hideLogo } from "@/utils/AnimateLogo";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

function NavMenu() {
  let menuRef = useRef();

  const closeMenu = () => {
    let q = new gsap.utils.selector(menuRef);
    const tl = new gsap.timeline();

    hideLogo("menuLogoPath1");

    tl.to(
      q(".word"),
      { yPercent: -100, duration: 1, ease: "power3.out" },
      "start"
    )
      .to(
        q(".horizontal-line"),
        {
          width: 0,
          duration: 0.75,
          ease: "expo.out",
        },
        "<0.15"
      )
      .to(
        q(".menu-close"),
        {
          opacity: 0,
          duration: 0.5,
          ease: "expo.inOut",
        },
        "start"
      )
      .to(
        q(".menu-contact-btn"),
        {
          yPercent: -100,
          duration: 0.5,
          ease: "expo.inOut",
        },
        "start"
      )
      .to(
        q(".social-media-links .icon"),
        {
          yPercent: -110,
          duration: 0.25,
          ease: "expo.inOut",
        },
        "start"
      )
      .to(
        q(".menu-bg"),
        { scaleX: 0, duration: 1.5, ease: "expo.inOut" },
        "start"
      )
      .to(menuRef, { zIndex: -1, duration: 0 });
  };

  return (
    <div
      className="nav-menu position-fixed"
      style={{
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
      ref={(el) => (menuRef = el)}
    >
      <div
        className="menu-bg bg-black position-absolute"
        style={{ zIndex: -1 }}
      ></div>
      <div
        className="content text-white d-flex flex-column"
        style={{ zIndex: 1 }}
      >
        <div className="menu-header d-flex flex-row justify-content-between ">
          <div className="menu-logo-wrapper " onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 731 670"
            >
              <path
                id="menuLogoPath1"
                d="M71 600L366 70L661 600"
                stroke="white"
                strokeWidth="130"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0}
              />
            </svg>
          </div>
          <div className="menu-close-wrapper" onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 114 114"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={8}
                opacity={0}
                d="m5 5 103.238 103.238"
                id="menuClosePath1"
                className="menu-close"
              />
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={8}
                opacity={0}
                d="M5 108.238 108.238 5"
                id="menuClosePath2"
                className="menu-close"
              />
            </svg>
          </div>
        </div>
        <div className="links d-flex flex-grow-1 flex-column flex-xl-row justify-content-xl-between justify-content-center gap-3 align-items-xl-center">
          <p className="link fw-medium">Home</p>
          <p className="link fw-medium">Projects</p>
          <p className="link fw-medium">About</p>
          <p className="link fw-medium">Contact</p>
        </div>
        <div className="menu-footer">
          <div className="horizontal-line"></div>
          <div className="footer-content d-flex flex-row justify-content-between align-items-start mt-5 mb-4">
            <div className="button-wrapper">
              <button className="btn btn-lg btn-outline-light menu-contact-btn">
                Contact Me
              </button>
            </div>

            <div className="social-media-links d-flex gap-4">
              <div className="icon-wrapper">
                <FaGithub size={"1.75em"} className="icon" />
              </div>
              <div className="icon-wrapper">
                <FaLinkedin size={"1.75em"} className="icon" />
              </div>
              <div className="icon-wrapper">
                <FaInstagram size={"1.75em"} className="icon" />
              </div>
              <div className="icon-wrapper">
                <HiOutlineMailOpen size={"1.75em"} className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
