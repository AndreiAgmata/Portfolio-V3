"use client";
import gsap from "gsap";

export const showLogo = (svgId1, svgId2, delay) => {
  const path1 = document.getElementById(svgId1);

  const length1 = path1.getTotalLength();
  gsap.set(path1, {
    strokeDasharray: length1,
    strokeDashoffset: length1,
  });

  const path2 = document.getElementById(svgId2);
  const length2 = path2.getTotalLength();
  gsap.set(path2, {
    strokeDasharray: length2,
    strokeDashoffset: -length2,
  });

  const timeline = new gsap.timeline();

  timeline
    .to(path1, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 0.35,
      ease: "power1.inOut",
      delay: delay,
    })
    .to(path2, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 0.35,
      ease: "power1.inOut",
    });
};

export const hideLogo = (svgId1, svgId2, delay) => {
  const path1 = document.getElementById(svgId1);
  const length1 = path1.getTotalLength();

  const path2 = document.getElementById(svgId2);
  const length2 = path2.getTotalLength();

  const timeline = new gsap.timeline();
  timeline
    .to(path1, {
      strokeDashoffset: -length1,
      duration: 0.35,
      opacity: 0,
      ease: "power1.inOut",
      delay: delay,
    })
    .to(path2, {
      strokeDashoffset: length2,
      duration: 0.35,
      opacity: 0,
      ease: "power1.inOut",
      delay: delay,
    });
};
