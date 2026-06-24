import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
