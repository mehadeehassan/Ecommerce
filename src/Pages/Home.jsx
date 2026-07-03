import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import TopRatad from "./TopRatad/TopRatad.jsx";
import BestSelling from "./BestSelling/BestSelling.jsx";
import { Disc } from "lucide-react";
import DiscountSection from "./DiscountSection/DiscountSection.jsx";

function Home() {
  return (
    <div>
      <Hero />
      <TopRatad />
      <BestSelling />
      <DiscountSection/>
    </div>
  );
}
export default Home;