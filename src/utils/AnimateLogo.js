"use client";
import gsap from "gsap";

export const showLogo = (svgId1, delay) => {
  const path1 = document.getElementById(svgId1);

  const length1 = path1.getTotalLength();
  gsap.set(path1, {
    strokeDasharray: length1,
    strokeDashoffset: length1,
  });

  const timeline = new gsap.timeline();

  timeline
    .to(path1, { scaleX: 1, duration: 0, transformOrigin: "center" })
    .to(path1, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 1,
      ease: "expo.out",
      delay: delay,
    });
};

export const hideLogo = (svgId1, delay) => {
  const path1 = document.getElementById(svgId1);
  const length1 = path1.getTotalLength();

  const timeline = new gsap.timeline();
  timeline
    .to(path1, { scaleX: -1, duration: 0, transformOrigin: "center" })
    .to(path1, {
      strokeDashoffset: length1,
      duration: 1,
      opacity: 0,
      ease: "expo.out",
      delay: delay,
    });
};
