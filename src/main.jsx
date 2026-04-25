import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router';
import MenDiscount from './components/DiscountProducts/MenDiscount.jsx';
import WomenDiscount from './components/DiscountProducts/WomenDiscount.jsx';
import DiscountAll from './components/DiscountProducts/DiscountAll.jsx';
import Products from './Pages/Products.jsx';
import About from './components/aboutpage/About.jsx';
import Contacts from './components/ContactUs/Contact.jsx'
import Services from './components/Services/Services.jsx';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MenDiscount" element={<MenDiscount />} />
        <Route path="/WomenDiscount" element={<WomenDiscount />} />
        <Route path="/DiscountAll" element={<DiscountAll />} />
        <Route path="/products/:productType" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
  </BrowserRouter>,
)
