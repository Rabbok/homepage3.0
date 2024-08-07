'use client'

import { useEffect } from "react";
import Nav from "./components/Navigation/Nav";
import Hero from "./components/Hero/Hero";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const glow = document.getElementById("glow");
      if (glow) {
        glow.style.left = `${event.clientX - glow.offsetWidth / 2}px`;
        glow.style.top = `${event.clientY - glow.offsetHeight / 2}px`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 bg-dark-indigo">
      <div id="glow"></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <Hero />
        <Nav />
      </div>
    </main>
  );
}