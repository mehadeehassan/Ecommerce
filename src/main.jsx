import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

//pages
import Home from "./Pages/Home";
import Products from "./Pages/Product/Products.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./Pages/About/About.jsx";
import Contacts from "./Pages/ContactUs/Contact.jsx";
import Services from "./Pages/Services/Services.jsx";

    //login pages
import LoginPage from "./Pages/Login/Login.jsx";
import SignUpPage from "./Pages/Login/SignUp.jsx";

    //  layout page
import HomeLayout from "./layout/HomeLayout.jsx";
import AdminLayout from "./layout/AdminLayout.jsx";
import LoginLayout from "./layout/LoginLayout.jsx";

    // admin page
import AdminPanel from "./Pages/Admin/AdminPanel.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import ProductsList from "./Pages/Admin/product-dropMenu/ProductsList.jsx";
import Category from "./Pages/Admin/product-dropMenu/Category.jsx";
import Brand from "./Pages/Admin/product-dropMenu/Brand.jsx";
import User from "./Pages/Admin/User.jsx";
import Customers from "./Pages/Admin/Customers.jsx";
import Settings from "./Pages/Admin/Settings.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Home Routing  */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/products/:productType" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Route>

      {/* login routing */}
      <Route path="/" element={<LoginLayout />}>
        <Route index element={<LoginLayout />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* admin routing */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ProductsList/>} />
        <Route path="products/category" element={<Category />} />
        <Route path="products/brand" element={<Brand />} />
        <Route path="user" element={<User />} />
        <Route path="customers" element={<Customers />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
