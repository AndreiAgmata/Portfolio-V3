"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

function Contact() {
  let trigger = useRef();
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(formDetails),
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      console.log("Message Sent");
      setSending(false);
      setFormDetails({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setSending(false);
      console.error(err);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const sectionTitle = new SplitType(".contact .header");
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top center+=100",
          scroller: ".pages",
          // markers: true,
          // toggleActions: "play none none reverse",
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
          q(".field-container"),
          {
            scaleY: 0,
            opacity: 0,
            duration: 0.5,
            transformOrigin: "bottom",
            ease: "expo.out",
            stagger: 0.05,
          },
          "<0.15"
        )
        .from(
          q(".send-btn"),
          {
            yPercent: 100,
            duration: 0.5,
            ease: "expo.out",
          },
          "<0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="contact bg-white"
      ref={(el) => (trigger = el)}
      id="contact"
    >
      <div className="content container">
        <h1 className="header">
          Reach out, <br /> let&apos;s talk
        </h1>
        <div className="form-wrapper mt-5">
          <div className="row field-row gx-5 gy-5">
            <div className="col-12 col-md-6">
              <div className="field-container row d-flex align-items-center border-bottom border-2 pb-4 mx-1">
                <p className="fw-medium col-2 mb-0 p-0">NAME</p>
                <div className="input-wrapper col">
                  <input
                    type="text"
                    className="form-control"
                    style={{ fontWeight: 300 }}
                    name="name"
                    value={formDetails.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="field-container row d-flex align-items-center border-bottom border-2 pb-4 mx-1">
                <p className="fw-medium col-2 mb-0 p-0">EMAIL</p>
                <div className="input-wrapper col">
                  <input
                    type="email"
                    className="form-control"
                    style={{ fontWeight: 300 }}
                    name="email"
                    value={formDetails.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="field-container border-bottom border-2 pb-4 mx-1">
                <p className="fw-medium col-1 mb-0 p-0">MESSAGE</p>
                <div className="input-wrapper col">
                  <input
                    type="text"
                    className="form-control px-0 mt-3"
                    style={{ fontWeight: 300 }}
                    name="message"
                    value={formDetails.message}
                    onChange={handleChange}
                    placeholder="I'm excited to hear from you"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="btn-wrapper">
                <button
                  className="send-btn btn btn-lg btn-outline-dark"
                  onClick={handleSubmit}
                  disabled={sending}
                >
                  {sending ? "Sending Message" : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
