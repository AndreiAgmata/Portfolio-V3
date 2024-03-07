"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/NavBar/Navbar";
import Projects from "@/components/Projects/Projects";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    const ctx = new gsap.context(() => {});

    return () => ctx.revert();
  }, []);
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
