"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/NavBar/Navbar";
import Preloader from "@/components/Preloader/Preloader";
import Projects from "@/components/Projects/Projects";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  return (
    <main className="pages">
      <Preloader />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
