import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import TopRatad from "./TopRatad/TopRatad.jsx";
import BestSelling from "./BestSelling/BestSelling.jsx";

function Home() {
  return (
    <div>
      <Hero />
      <TopRatad />
      <BestSelling />
    </div>
  );
}
export default Home;