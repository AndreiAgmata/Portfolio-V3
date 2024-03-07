"use client";
import gsap from "gsap";

let animationDone = false;

export const animateBurger = (svgId1, svgId2, svgId3, delay) => {
  const path1 = document.getElementById(svgId1);
  const length1 = path1.getTotalLength();
  gsap.set(path1, {
    strokeDasharray: length1,
    strokeDashoffset: 0,
  });

  const path2 = document.getElementById(svgId2);
  const length2 = path2.getTotalLength();
  gsap.set(path2, {
    strokeDasharray: length2,
    strokeDashoffset: 0,
  });

  const path3 = document.getElementById(svgId3);
  const length3 = path3.getTotalLength();
  gsap.set(path3, {
    strokeDasharray: length3,
    strokeDashoffset: 0,
  });

  const timeline = new gsap.timeline();

  timeline
    //exit
    .to(path1, {
      xPercent: 110,
      duration: 0.35,
      ease: "power1.inOut",
      delay: delay,
    })
    .to(
      path2,
      {
        xPercent: 110,
        duration: 0.35,
        ease: "power1.inOut",
      },
      "<0.1"
    )
    .to(
      path3,
      {
        xPercent: 110,
        duration: 0.35,
        ease: "power1.inOut",
      },
      "<0.1"
    )
    //reset to 0
    .to(path1, {
      xPercent: -110,
      duration: 0,
    })
    .to(path2, {
      xPercent: -110,
      duration: 0,
    })
    .to(
      path3,
      {
        xPercent: -110,
        duration: 0,
      },
      "start"
    )
    //enter
    .to(
      path1,
      {
        xPercent: 0,
        duration: 0.35,
        ease: "power1.inOut",
        delay: delay,
      },
      "start"
    )
    .to(
      path2,
      {
        xPercent: 0,
        duration: 0.35,
        ease: "power1.inOut",
      },
      "<0.1"
    )
    .to(
      path3,
      {
        xPercent: 0,
        duration: 0.35,
        ease: "power1.inOut",
      },
      "<0.1"
    );
};

// .to(path1, {
//   strokeDashoffset: 0,
//   opacity: 1,
//   duration: 0.75,
//   ease: "power1.inOut",
//   delay: delay,
// })
// .to(
//   path2,
//   {
//     strokeDashoffset: 0,
//     opacity: 1,
//     duration: 0.75,
//     ease: "power1.inOut",
//   },
//   "<0.15"
// )
// .to(
//   path3,
//   {
//     strokeDashoffset: 0,
//     opacity: 1,
//     duration: 0.75,
//     ease: "power1.inOut",
//   },
//   "<0.15"
// );
