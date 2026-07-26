/* eslint-disable no-unused-vars */
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  SiAlipay,
  SiAmericanexpress,
  SiApplepay,
  SiBitcoin,
  SiCashapp,
  SiDinersclub,
  SiDiscover,
  SiGooglepay,
  SiJcb,
  SiKlarna,
  SiMastercard,
  SiPaypal,
  SiSamsungpay,
  SiStripe,
  SiVisa,
} from "react-icons/si";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/Logo.png";

const PAYMENT_METHODS = [
  { Icon: SiVisa, color: "#1A1F71", label: "Visa" },
  { Icon: SiMastercard, color: "#EB001B", label: "Mastercard" },
  { Icon: SiAmericanexpress, color: "#006FCF", label: "American Express" },
  { Icon: SiPaypal, color: "#003087", label: "PayPal" },
  { Icon: SiDiscover, color: "#FF6000", label: "Discover" },
  { Icon: SiApplepay, color: "#000000", label: "Apple Pay" },
  { Icon: SiGooglepay, color: "#4285F4", label: "Google Pay" },
  { Icon: SiStripe, color: "#635BFF", label: "Stripe" },
  { Icon: SiKlarna, color: "#FFB3C7", label: "Klarna" },
  { Icon: SiJcb, color: "#0B4EA2", label: "JCB" },
  { Icon: SiDinersclub, color: "#004A97", label: "Diners Club" },
  { Icon: SiBitcoin, color: "#F7931A", label: "Bitcoin" },
  { Icon: SiCashapp, color: "#00D632", label: "Cash App" },
  { Icon: SiSamsungpay, color: "#1428A0", label: "Samsung Pay" },
  { Icon: SiAlipay, color: "#1677FF", label: "Alipay" },
];

const Footer = () => {
  return (
    //    background color

    <div className="bg-gray-950 text-white border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2">
          {/* Company Details */}
          <div className="mt-6 px-4">
            <h2 className="sm:text-3xl text-xl font-bold mb-3 sm:text-left text-justify flex items-center">
              <img src={footerLogo} alt="Logo" className="w-9 h-9" />
              SHOPS
            </h2>
            <p className="text-gray-400 text-sm font-medium sm:text-left text-justify leading-relaxed">
              Quality products, fast delivery, and support you can count on —
              that's the SHOPS promise.
            </p>
          </div>

          {/* Footer Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Important Links Column */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-lg font-bold mb-3">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <Link to="/">
                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                      <span>Home</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Other Links */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-lg font-bold mb-3">
                  Support Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <Link to="/about">
                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                      <span>About</span>
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                      <span>Contact</span>
                    </li>
                  </Link>
                  <Link to="/services">
                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                      <span>Services</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-lg font-bold mb-3">Follow Us</h1>
              <div className="flex gap-4 items-center mt-4">
                <a
                  href="https://www.instagram.com/mehediahnaf_1"
                  target="_blank"
                  className="text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/mehediahnaf1"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-600 hover:translate-x-1 duration-300"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="https://github.com/mehadeehassan"
                  target="_blank"
                  className="text-gray-400 hover:text-white hover:translate-x-1 duration-300"
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mehadeehassan/"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400 hover:translate-x-1 duration-300"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Payment Methods */}
        <div className="flex flex-col items-center gap-3 py-4 border-t border-gray-800">
          <p className="text-gray-500 text-sm font-medium">We accept</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl">
            {PAYMENT_METHODS.map(({ Icon, color, label }) => (
              <div
                key={label}
                title={label}
                className="w-12 h-8 sm:w-14 sm:h-9 rounded-md bg-white flex items-center justify-center"
              >
                <Icon className="text-lg sm:text-xl" style={{ color }} />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section  */}
        <div className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
          © {new Date().getFullYear()} Shops. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
