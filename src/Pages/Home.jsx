import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import TopRatad from '../components/TopRatad/TopRatad.jsx';
import BestSelling from '../components/BestSelling/BestSelling.jsx';
import DiscountProducts from '../components/DiscountProducts/kidsDiscount.jsx';



function Home() {

  return (
    <div>
      <Hero />
      <TopRatad />
      <BestSelling />
      <DiscountProducts />

    </div>
  );
}
export default Home;