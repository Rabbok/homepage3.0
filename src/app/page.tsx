'use client'

import { useEffect } from "react";
import Nav from "./components/Navigation/Nav";
import Hero from "./components/Hero/Hero";
import Description from "./components/Description/Description";
import ExperinceBlock from "./components/ExperienceBlock/ExperienceBlock";
import Project from "./components/Project/Project";

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
    <main className="relative grid grid-cols-2 min-h-screen flex-row items-start justify-between p-24 bg-dark-indigo">
      <div id="glow" className="w-24 h-24 bg-white-half rounded-full pointer-events-none absolute"></div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <Hero />
        <Nav />
      </div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">

        <Description/>

        <div className="mb-20">
          <ExperinceBlock title="Open source" text="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility." tags={["JavaScript", "React"]}/>
          <ExperinceBlock title="Front-End Developer" text="At Bright Future Technologies, I contributed to the development of interactive web applications using Angular and TypeScript. My role involved building user-friendly web pages that were integral to the successful launch of a new product. I focused on creating clean, maintainable code while continuously improving my skills in front-end technologies and best practices. Through my efforts, I helped the team deliver a high-quality product on time, while also gaining valuable experience in working within a dynamic development environment." tags={["JavaScript", "React"]}/>
        </div>

        <div>
          <Project/>
          <Project/>
          <Project/>
        </div>
      </div>
    </main>
  );
}