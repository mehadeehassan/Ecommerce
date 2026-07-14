import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import TopRatad from "../../components/Home/TopRatad/TopRatad.jsx";
import BestSelling from "../../components/Home/BestSelling/BestSelling.jsx";
import DiscountSection from "../../components/Home/DiscountSection/DiscountSection.jsx";

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