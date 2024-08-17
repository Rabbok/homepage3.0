'use client'

import { useEffect } from "react";
import Nav from "./components/Navigation/Nav";
import Hero from "./components/Hero/Hero";
import Description from "./components/Description/Description";
import ExperinceBlock from "./components/ExperienceBlock/ExperienceBlock";
import Project from "./components/Project/Project";
import SocialMedia from "./components/SocialMedia/SocialMedia";

export default function Home() {
  useEffect(() => {
    const glow = document.getElementById("glow");

    const handleMouseMove = (event: MouseEvent) => {
      console.log('mouse move event');
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
    <main className="relative grid grid-cols-2 min-h-screen flex-row items-start justify-between bg-dark-indigo">
      <div id="glow" className="w-24 h-24 bg-white-half rounded-full pointer-events-none"></div>

      <div className="sticky top-0 h-screen mx-auto min-h-screen max-w-screen-xl px-6 py-20 font-sans md:px-12 lg:px-24 lg:py-20">
        <Hero />
        <Nav />
        <SocialMedia />
      </div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        
        <section id="about" className="pb-32 py-24">
          <Description/>
        </section>

        <section id="experience" className="pb-20">
          <ExperinceBlock title="Open source" text="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility." tags={["JavaScript", "React"]}/>
          <ExperinceBlock title="Front-End Developer" text="At Bright Future Technologies, I contributed to the development of interactive web applications using Angular and TypeScript. My role involved building user-friendly web pages that were integral to the successful launch of a new product. I focused on creating clean, maintainable code while continuously improving my skills in front-end technologies and best practices. Through my efforts, I helped the team deliver a high-quality product on time, while also gaining valuable experience in working within a dynamic development environment." tags={["JavaScript", "React"]}/>
        </section>

        <section id="projects" className="min-h-96">
          <Project title="Jammming" text="Jammming is an application designed to conveniently save tracks from the Spotify platform into playlists. With Jammming, users can create and manage personalized music collections on Spotify, making the process of saving tracks more organized and user-friendly."/>
          <Project title="Jammming" text="Jammming is an application designed to conveniently save tracks from the Spotify platform into playlists. With Jammming, users can create and manage personalized music collections on Spotify, making the process of saving tracks more organized and user-friendly."/>
          <Project title="Jammming" text="Jammming is an application designed to conveniently save tracks from the Spotify platform into playlists. With Jammming, users can create and manage personalized music collections on Spotify, making the process of saving tracks more organized and user-friendly."/>
        </section>
      </div>
    </main>
  );
}