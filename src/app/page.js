"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/NavBar/Navbar";
import Preloader from "@/components/Preloader/Preloader";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="">
      <>
        <Preloader />
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </>
    </main>
  );
}
