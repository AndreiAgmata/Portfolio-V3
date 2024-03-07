import React, { useEffect } from "react";
import "./Hero.scss";
import SplitType from "split-type";
import gsap from "gsap";

function Hero() {
  // background effect
  useEffect(() => {
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

    // const heroElement = document.querySelector(".hero");
    // if (heroElement) {
    //   heroElement.addEventListener("pointermove", handlePointerMove);
    // }

    // return () => {
    //   if (heroElement) {
    //     heroElement.removeEventListener("pointermove", handlePointerMove);
    //   }
    // };
  }, []);

  // intro animation
  useEffect(() => {
    const introText = new SplitType(".text-intro");
    const tl = gsap.timeline();
    tl.from(".text-intro .word", {
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.15,
    });

    return () => tl.kill();
  }, []);

  // description animation
  useEffect(() => {
    const descriptionText = new SplitType(".text-description");
    const tl = gsap.timeline();
    tl.from(".text-description .word", {
      yPercent: 100,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.15,
    });

    return () => tl.kill();
  }, []);

  return (
    <>
      <div className="background position-absolute "></div>
      <section className="hero">
        <div className="content container h-100 d-flex flex-column justify-content-center align-items-start">
          <p className="text-intro fw-medium">HELLO THERE, I&apos;M ANDREI.</p>
          <p className="text-description fw-regular mt-3">
            I craft innovative <br /> digital experiences <br /> for the web.
          </p>
          <button className="btn btn-outline-light rounded-pill mt-4">
            View My Resume
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
