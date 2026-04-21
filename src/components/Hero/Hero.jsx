import React from 'react'
import Image1 from "../../assets/Hero/w.png";
import Image2 from "../../assets/Hero/wife.png";
import Image3 from "../../assets/Hero/sale1.png";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const Slider = SliderImport.default ? SliderImport.default : SliderImport;

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-138 sm:min-h-163 bg-gray-100 flex justify-center items-center duration-200" >
            {/* background pattern */}
            <div className="h-175 w-175 bg-orange-200 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]">
            </div>
            
            {/* hero section */}
            <div className="container mx-auto pb-8 sm:pb-0">
                <Slider {...settings}>
                    
                    {/* Slide 1: Men Wear */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                <h1  className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                    Upto 50% off on all Man's wear
                                </h1>
                                <p className="text-sm">
                                    Discover the latest trends in men's fashion with our exclusive collection.
                                </p>
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                                    <Link to="/MenDiscount">
                                        <button className="bg-linear-to-r bg-orange-400 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                            Shop Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="order-1 sm:order-2">
                                <div className="relative z-10">
                                    <img src={Image1} alt="Men" className="w-75 h-75 sm:h-112 sm:w-123 sm:scale-105 lg:scale-120 object-contain mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2: Women Wear */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                    Upto 50% off on all Women's wear
                                </h1>
                                <p className="text-sm">
                                    Discover the latest trends in women's fashion with our exclusive collection.
                                </p>
                                <div>
                                    <Link to="/WomenDiscount">
                                        <button className="bg-linear-to-r bg-orange-400 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                            View Collection
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="order-1 sm:order-2">
                                <div  className="relative z-10">
                                    <img src={Image2} alt="Women" className="w-75 h-75 sm:h-112 sm:w-113 sm:scale-105 lg:scale-120 object-contain mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3: Sale */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                    70% off on all sale
                                </h1>
                                <p className="text-sm">
                                    Don't miss out on our incredible sale! Grab the best deals before they're gone!
                                </p>
                                <div >
                                    <Link to="/DiscountAll">
                                        <button className="bg-linear-to-r bg-orange-400 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                            Discount Collection
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="order-1 sm:order-2">
                                <div className="relative z-10">
                                    <img src={Image3} alt="Sale" className="w-75 h-75 sm:h-112 sm:w-123 sm:scale-105 lg:scale-120 object-contain mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Hero;