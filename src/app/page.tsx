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
      if (glow) {
        glow.style.left = `${event.pageX - glow.offsetWidth / 2}px`;
        glow.style.top = `${event.pageY - glow.offsetHeight / 2}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-dark-indigo">
      <div id="glow" className="hidden md:block md:absolute w-24 h-24 bg-white-half rounded-full pointer-events-none"></div>
      
      <div className="grid h-1/2 lg:grid-cols-2 md:grid-cols-1 mx-auto flex-row justify-between max-w-7xl items-start">
        <div className="lg:sticky top-0 lg:h-screen lg:min-h-screen max-w-screen-xl px-6 pt-10 pb-0 font-sans md:px-12 md:px-24 md:py-20">
          <Hero />
          <Nav />
          <SocialMedia />
        </div>

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-0 font-sans md:px-12 md:py-20 md:px-24 md:py-0">

          <section id="about" className="pb-32 py-24">
            <p className="sticky top-0 md:hidden text-white font-medium text-base py-2 mb-2 bg-dark-indigo z-10">Description</p>
            <Description />
          </section>

          <section id="experience" className="pb-20">
            <p className="sticky top-0 md:hidden text-white font-medium text-base py-2 mb-2 bg-dark-indigo z-10">Experience</p>
            <ExperinceBlock date="2023 - PRESENT" title="Freelance Front-End Development Experience" text="In my work as a freelance front-end developer, i’ve designed and built custom websites that are both responsive and user-friendly, focusing on creating interfaces that are visually appealing and easy to navigate. Throughout these projects, I’ve collaborated closely with clients to understand their needs, provide updates, and deliver high-quality results. This experience has allowed me to refine my front-end skills and manage projects effectively." />
            <ExperinceBlock date="2023 - 2024" title="Open Source Contributions" text="In my experience with open source projects on GitHub, I’ve contributed by adding new features, fixing bugs, and improving the overall functionality of various projects. Additionally, I’ve engaged with the community by participating in discussions and reviews, which has helped me collaborate effectively with other contributors and maintainers." />
            <ExperinceBlock date="2022 - 2023" title="Self-Learning & Online Courses" text="Throughout my journey in front-end development, I have actively pursued self-learning and completed a range of online courses to enhance my skills and knowledge. These courses have covered various topics, including TypeScript, Next.js, Tailwind CSS, and Redux, enabling me to stay up-to-date with industry trends and best practices." />
          </section>

          <section id="projects" className="min-h-96 mb-40 lg:mb-0">
            <p className="sticky top-0 md:hidden text-white font-medium text-base py-2 mb-2 bg-dark-indigo z-10">Projects</p>
            <Project imageName="image (2).png" title="Finuncle" text="Finuncle is a comprehensive budget management platform designed to help users efficiently track and plan their finances. The site features powerful tools, including SIP, CAGR, and EMI calculators, allowing users to make informed financial decisions and optimize their investment strategies." tags={["JavaScript", "React", "API", "Jest", "Git"]} />
            <Project imageName="image (5).png" title="Homepage" text="This homepage serves as the gateway to my portfolio, offering a clear and engaging introduction to my work. It features a contemporary design with easy navigation to explore my projects, skills, and professional experience." tags={["Next.js", "TypeScript", "Tailwind CSS", "Git"]} />
            <Project imageName="image (4).png" title="Jammming" text="Jammming is an application designed to conveniently save tracks from the Spotify platform into playlists. With Jammming, users can create and manage personalized music collections on Spotify, making the process of saving tracks more organized and user-friendly." tags={["Next.js", "TypeScript", "SASS", "Git", "API"]} />
          </section>
        </div>
      </div>
    </main>
  );
}