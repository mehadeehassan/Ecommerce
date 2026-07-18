import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { store } from "./redux/Store.js";

//pages
import About from "./Pages/About/About.jsx";
import AdToCart from "./Pages/Cart/AddToCart.jsx";
import Contacts from "./Pages/ContactUs/Contact.jsx";
import Home from "./Pages/Home/Home.jsx";
import Products from "./Pages/Product/Products.jsx";
import Services from "./Pages/Services/Services.jsx";

//login pages
import LoginPage from "./Pages/Login/Login.jsx";
import SignUpPage from "./Pages/Login/SignUp.jsx";

//  layout page
import AdminLayout from "./layout/AdminLayout.jsx";
import HomeLayout from "./layout/HomeLayout.jsx";

// admin page
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";
import Customers from "./Pages/Admin/Customers.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import Brand from "./Pages/Admin/product-dropMenu/Brand.jsx";
import Category from "./Pages/Admin/product-dropMenu/Category.jsx";
import ProductsList from "./Pages/Admin/product-dropMenu/ProductsList.jsx";
import Settings from "./Pages/Admin/Settings.jsx";
import User from "./Pages/Admin/User.jsx";
import HeroSlides from "./Pages/Admin/HeroSlides/HeroSlides.jsx";
import AdminLogin from "./Pages/AdminLogin/AdminLogin.jsx";
import ForgotPassword from "./Pages/AdminLogin/ForgotPassword.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* Home Routing  */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/products/:productType" element={<Products />} />
          <Route path="/products/discount/:category" element={<Products />} />
          <Route path="/products/new-arrivals" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<AdToCart />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
        </Route>

        {/* admin login routing */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* admin routing */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/category" element={<Category />} />
          <Route path="products/brand" element={<Brand />} />
          <Route path="hero-slides" element={<HeroSlides />} />
          <Route path="user" element={<User />} />
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
