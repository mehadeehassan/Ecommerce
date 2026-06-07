import React from 'react'
import Hero from '../components/Hero/Hero.jsx';
import TopRatad from './TopRatad/TopRatad.jsx';
import BestSelling from './BestSelling/BestSelling.jsx';
import DiscountProducts from './DiscountProducts/kidsDiscount.jsx';

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