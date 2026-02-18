import Image from "next/image";
import Landing from "./components/Landing";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";
import About from "./components/About";
import HorizontalLines from "./components/Lines";
import SpiralToLines from "./components/MorphingSpiral";
import Sponsors from "./components/Sponsor";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Schedule />
      <FAQ />
      <Sponsors />
    </div>
  );
}
