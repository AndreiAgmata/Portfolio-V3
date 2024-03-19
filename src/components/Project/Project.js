"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "./Project.scss";
import gsap from "gsap";
import Link from "next/link";
import { RiShareBoxLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

function Project({ itemId, project }) {
  let imageCoverRef = useRef();
  let itemRef = useRef();
  let imageContainerRef = useRef();

  const openLinkInNewTab = (link) => {
    window.open(link, "_blank");
  };

  const removeImageCover = (direction) => {
    const transformOrigin = direction === "top" ? "bottom" : "top";
    const tl = new gsap.timeline();

    const q = new gsap.utils.selector(itemRef);

    tl.to(
      imageCoverRef,
      {
        scaleY: 0,
        transformOrigin: transformOrigin,
        duration: 0.25,
        ease: "power3.inOut",
      },
      "start"
    )
      .to(
        itemRef,
        { color: "white", duration: 0.25, ease: "power3.out" },
        "<0.05"
      )
      .fromTo(
        imageContainerRef,
        { scale: 1.4 },
        {
          scale: 1,
          duration: 2,
          ease: "expo.out",
        },
        "start"
      );
  };

  const showImageCover = (direction) => {
    const transformOrigin = direction === "top" ? "bottom" : "top";
    const tl = new gsap.timeline();
    tl.to(imageCoverRef, {
      scaleY: 1,
      transformOrigin: transformOrigin,
      duration: 0.25,
      ease: "power3.inOut",
    }).to(
      itemRef,
      { color: "black", duration: 0.25, ease: "power3.out" },
      "<0.05"
    );
  };

  useEffect(() => {
    const container = document.getElementById(`project-item${itemId}`);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    function handleMouseEnterTop() {
      removeImageCover("top");
    }

    function handleMouseEnterBottom() {
      removeImageCover("bottom");
    }

    function handleMouseEnter(event) {
      const bounds = event.target.getBoundingClientRect();
      const mouseY = event.clientY - bounds.top;
      const containerHeight = bounds.height;

      if (mouseY < containerHeight / 2) {
        handleMouseEnterTop();
      } else {
        handleMouseEnterBottom();
      }
    }

    function handleMouseLeaveTop() {
      showImageCover("top");
    }

    function handleMouseLeaveBottom() {
      showImageCover("bottom");
    }

    function handleMouseLeave(event) {
      const bounds = event.target.getBoundingClientRect();
      const mouseY = event.clientY - bounds.top;
      const containerHeight = bounds.height;

      // Determine if mouse is leaving from top or bottom based on mouseY position
      if (mouseY < containerHeight / 2) {
        handleMouseLeaveTop();
      } else {
        handleMouseLeaveBottom();
      }
    }
  }, [itemId]);

  return (
    <div
      id={`project-item${itemId}`}
      className="projects-item-wrapper position-relative"
    >
      <div
        className="image-wrapper w-100 h-100 position-absolute"
        style={{ top: 0, zIndex: 1 }}
      >
        <Image
          src={project.image}
          alt="project-image"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
          ref={(el) => (imageContainerRef = el)}
        />
      </div>
      <div
        className="image-cover position-absolute bg-white"
        style={{ top: 0, zIndex: 1, width: "100%", height: "100%" }}
        ref={(el) => (imageCoverRef = el)}
      ></div>

      <div
        className="project-item container position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="item-header row gx-4" ref={(el) => (itemRef = el)}>
          <div className="project-title col-12 col-md-6 d-flex flex-column">
            <p className="name fw-semibold">{project.name}</p>
            <p className="subTitle fw-medium  col-12 col-md-6">
              {project.subtitle}
            </p>
            <div className="project-links mt-5">
              {project.productionLink && (
                <div
                  className="project-link d-flex flex-row align-items-center gap-1"
                  onClick={() => openLinkInNewTab(project.productionLink)}
                >
                  <p className="mb-0">See Production</p>
                  <RiShareBoxLine size={"1.25em"} />
                </div>
              )}
              {project.githubLink && (
                <div
                  className="project-link d-flex flex-row align-items-center gap-1 mt-2"
                  onClick={() => openLinkInNewTab(project.githubLink)}
                >
                  <p className="mb-0">See Code</p>
                  <FiGithub size={"1.25em"} />
                </div>
              )}
            </div>
          </div>

          <p className="project-desc fw-regular col-12 col-md-6 mt-5 mt-md-0">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
