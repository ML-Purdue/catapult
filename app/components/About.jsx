"use client";

import { useState, useEffect, useRef } from "react";
import HorizontalLines from "./Lines";
import PillBadge from "./Pill";
import PrizeCategories from "./Categories";
import PhotoGallery from "./PhotoGallery";
import Lottie from "lottie-react";
import catapultAnimation from "../animations/catapult-load.json";

export default function About() {
  const [play, setPlay] = useState(false);
  const lottieRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setPlay(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && lottieRef.current) {
          lottieRef.current.goToAndPlay(0, true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [play]);

  const handleComplete = () => {
    setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.goToAndPlay(0, true);
      }
    }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-start bg-[#151c43] text-white pb-[50vh] overflow-hidden"
    >
      {/* ——— Welcome to CATAPULT header ——— */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-12 pb-4 px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white whitespace-nowrap"
            style={{ fontFamily: "var(--font-unbounded), sans-serif" }}
          >
            Welcome to
          </span>
          {play && (
            <Lottie
              lottieRef={lottieRef}
              animationData={catapultAnimation}
              loop={false}
              onComplete={handleComplete}
              style={{ width: 320, height: "auto" }}
              className="inline-block"
            />
          )}
        </div>
      </div>

      {/* ——— About banner ——— */}
      <div className="relative z-10 w-full py-6 px-6">
        <p
          className="text-xl sm:text-2xl leading-snug text-center max-w-5xl mx-auto text-white"
          style={{ fontFamily: "var(--font-raleway), sans-serif" }}
        >
          A 36-hour{" "}
          <span className="text-[#6be5be]" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
            AI + ML × Entrepreneurship
          </span>{" "}
          hackathon hosted by ML@Purdue. Whether you're a designer, hacker,
          founder, or researcher, Catapult is your launchpad to create, build,
          and share something extraordinary. Ready
          to take the leap?
          <br />
          <span className="text-[#6be5be]" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
            Join us and build something unforgettable.
          </span>
        </p>
      </div>

      {/* ——— Logistics ——— */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl text-center w-full mt-2 mb-15">
        <a
          href="https://luma.com/mp8bovsd?utm_source=embed"
          className="relative px-12 py-4 cursor-pointer backdrop-blur-md bg-[#6be5be]/25 border border-[#6be5be]/45 rounded-full transition-all duration-300 ease-out hover:bg-[#6be5be]/40 hover:border-[#6be5be]/65 hover:shadow-[0_8px_32px_rgba(107,229,190,0.25)] hover:-translate-y-0.5 active:translate-y-0 tracking-wide font-medium text-lg text-white no-underline mb-6"
        >
          Apply now
        </a>
        <div className="flex flex-row gap-10 items-center justify-center flex-wrap">
          <PillBadge text="April 3rd – 5th" width={360} height={140} />
          <PillBadge text="@ WALC" width={360} height={140} />
        </div>
      </div>

      {/* ——— Photo Gallery ——— */}
      <PhotoGallery />

      {/* ——— Categories ——— */}
      <div className="mt-25 relative z-10 flex flex-col items-center justify-center max-w-4xl text-center w-full">
        <h1
          className="text-5xl -mb-17 font-semibold"
          style={{ fontFamily: "var(--font-unbounded), sans-serif" }}
        >
          Categories
        </h1>
        <PrizeCategories />
      </div>

      <HorizontalLines />
    </section>
  );
}
