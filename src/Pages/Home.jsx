import React from 'react'
import Hero from '../components/Hero/Hero'
import TopRatad from '../components/TopRatad/TopRatad';
import BestSelling from '../components/BestSelling/BestSelling';
import DiscountProducts from '../components/DiscountProducts/kidsDiscount';


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