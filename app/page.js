import Image from "next/image";
import Landing from "./components/Landing";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";
import About from "./components/About";
import HorizontalLines from "./components/Lines";
import SpiralToLines from "./components/MorphingSpiral";
import Sponsors from "./components/Sponsor";
import Footer from "./components/Footer";
import { getPhotos } from "./lib/getPhotos";

export default function Home() {
  const photos = getPhotos();
  return (
    <div>
      <Landing />
      <About photos={photos} />
      <Schedule />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}
