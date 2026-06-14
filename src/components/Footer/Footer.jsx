import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/Logo.png';


const Footer = () => {
    return (
        //    background color

        <div className="bg-gray-950 text-white border-t border-gray-800">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 pb-20 pt-10">
                    
                    {/* Company Details */}
                    <div className="mt-6 px-4">
                        <h2 className="sm:text-3xl text-xl font-bold mb-3 sm:text-left text-justify flex items-center">
                            <img src={footerLogo} alt="Logo" className="w-9 h-9" />
                            SHOPS
                        </h2>
                        <p className="text-gray-400 text-sm font-medium sm:text-left text-justify leading-relaxed">
                            My Company is a leading provider of high-quality products and services.
                        </p>
                    </div>

                    {/* Footer Links Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        
                        {/* Important Links Column */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="sm:text-xl text-lg font-bold mb-3">Quick Links</h1>
                                <ul className="flex flex-col gap-3">
                                    <Link to="/"><li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>Home</span>
                                    </li></Link>

                                    
                                </ul>
                            </div>
                        </div>

                        {/* Other Links */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="sm:text-xl text-lg font-bold mb-3">Support Links</h1>
                                <ul className="flex flex-col gap-3">
                                    <Link to="/about"><li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>About</span>
                                    </li></Link>
                                    <Link to="/contact"><li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>Contact</span>
                                    </li></Link>
                                    <Link to="/services"><li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>Services</span>
                                    </li></Link>
                                </ul>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-lg font-bold mb-3">Follow Us</h1>
                            <div className="flex gap-4 items-center mt-4">
                                <a href="https://www.instagram.com/mehediahnaf_1" className="text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="https://www.facebook.com/mehediahnaf1" className="text-gray-400 hover:text-blue-600 hover:translate-x-1 duration-300">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="https://github.com/mehadeehassan" className="text-gray-400 hover:text-white hover:translate-x-1 duration-300">
                                    <FaGithub className="text-3xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/mehadeehassan/" className="text-gray-400 hover:text-blue-400 hover:translate-x-1 duration-300">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            {/* <div className="mt-8 space-y-4">
                                <div className="flex gap-3 items-center">
                                    <FaLocationArrow className="text-orange-400" />
                                    <p className="text-gray-400 text-sm">Dhaka Bangladesh</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <FaMobileAlt className="text-orange-400" />
                                    <p className="text-gray-400 text-sm">+8801643-896271</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                
                {/* Copyright Section  */}
                <div className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
                    © 2026 Shops. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;