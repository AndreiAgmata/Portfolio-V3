"use client";
import React, { useEffect, useRef } from "react";
import "./Projects.scss";
import Image from "next/image";
import Project from "../Project/Project";
import projectsData from "../../../public/projects.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitType from "split-type";

function Projects() {
  let trigger = useRef();
  const projectRefs = useRef([]);
  projectRefs.current = [];

  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const sectionTitle = new SplitType(".header .title");
      const sectionDescription = new SplitType(".header .subtitle");
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top center+=100",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      });
      const q = new gsap.utils.selector(trigger);

      tl.from(q(".title .word"), {
        yPercent: 100,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.25,
      }).from(
        q(".subtitle .word"),
        {
          yPercent: 100,
          duration: 1,
          ease: "expo.out",
          stagger: 0.05,
        },
        "<0.15"
      );
    });

    return () => ctx.revert();
  }, []);

  //animate individual project
  useEffect(() => {
    const ctx = new gsap.context(() => {
      const projectTitle = new SplitType(".item-header .project-title .name");
      const projectSubTitle = new SplitType(
        ".item-header .project-title .subTitle"
      );
      const projectDesc = new SplitType(".item-header .project-desc");
      projectRefs.current.forEach((projectRef) => {
        const tl = new gsap.timeline({
          scrollTrigger: {
            trigger: projectRef,
            start: "top center+=200",
            // markers: true,
            // toggleActions: "play none none reverse",
          },
        });

        const q = new gsap.utils.selector(projectRef);

        tl.fromTo(
          q(`.project-title .name .word`),
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, ease: "expo.out" }
        )
          .fromTo(
            q(`.project-title .subTitle .word`),
            { yPercent: 100, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 1,
              ease: "expo.out",
              stagger: 0.15,
            },
            "<0.25"
          )
          .fromTo(
            q(`.project-desc .word`),
            { yPercent: 100, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.75,
              ease: "expo.out",
              stagger: 0.15,
            },
            "<0.25"
          );
      });
    });

    return () => ctx.revert;
  });

  return (
    <section className="projects bg-white" ref={(el) => (trigger = el)}>
      <div className="projects-header-wrapper">
        <div className="projects-wrapper container">
          <div className="header row">
            <h1 className="text-dark title col-12 col-md-6">
              Personal <br />
              Projects
            </h1>
            <p className="text-dark subtitle fw-light col-12 col-md-6 mt-5 mt-md-0">
              A selection of my{" "}
              <span className="fw-medium">most recent work</span>, highlighting
              my <span className="fw-medium">creativity</span> and{" "}
              <span className="fw-medium">expertise</span> in web development.
            </p>
          </div>
        </div>
        <div className="divider w-100"></div>
      </div>

      {projectsData.map((project, index) => (
        <div key={index} ref={addToProjectRefs}>
          <Project itemId={index} project={project} />
          <div className="projects-divider w-100"></div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
