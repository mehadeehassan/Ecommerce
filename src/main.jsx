import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

//pages
import About from "./Pages/About/About.jsx";
import Contacts from "./Pages/ContactUs/Contact.jsx";
import Home from "./Pages/Home";
import Products from "./Pages/Product/Products.jsx";
import Services from "./Pages/Services/Services.jsx";

//login pages
import LoginPage from "./Pages/Login/Login.jsx";
import SignUpPage from "./Pages/Login/SignUp.jsx";

//  layout page
import AdminLayout from "./layout/AdminLayout.jsx";
import HomeLayout from "./layout/HomeLayout.jsx";

// admin page
import ProtectedRoute from "./components/AdminLogin/ProtectedRoute.jsx";
import Customers from "./Pages/Admin/Customers.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import Brand from "./Pages/Admin/product-dropMenu/Brand.jsx";
import Category from "./Pages/Admin/product-dropMenu/Category.jsx";
import ProductsList from "./Pages/Admin/product-dropMenu/ProductsList.jsx";
import Settings from "./Pages/Admin/Settings.jsx";
import User from "./Pages/Admin/User.jsx";
import AdminLogin from "./Pages/AdminLogin/AdminLogin.jsx";
import ForgotPassword from "./Pages/AdminLogin/ForgotPassword.jsx";

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
      </Route>

      {/* login routing */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
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
        <Route path="user" element={<User />} />
        <Route path="customers" element={<Customers />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
