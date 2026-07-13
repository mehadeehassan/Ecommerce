/* eslint-disable react-hooks/immutability */
import React, { useEffect, useState } from 'react'
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import axiosPublic from "../../Pages/Utils/axiosPublic";
import { getImageUrl } from "../../Pages/Utils/imageUrl";
const Slider = SliderImport.default ? SliderImport.default : SliderImport;

const Hero = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleGetActiveSlides();
    }, []);

    const handleGetActiveSlides = async () => {
        setLoading(true);
        try {
            const response = await axiosPublic.get("/getActiveHeroSlides");
            if (response.status === 200) {
                setSlides(response.data.data);
            }
        } catch (error) {
            console.log("Error fetching hero slides:", error);
        } finally {
            setLoading(false);
        }
    };

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    // slide er category_name thakle discount link category diye banbe, na thakle "all" (All Sale)
    const getSlideLink = (slide) => {
        if (slide.category_name) {
            return `/products/discount/${slide.category_name}`;
        }
        return "/products/discount/all";
    };

    // kono slide na thakle (loading shesh hoye giye khali ashle) hero section render korbe na
    if (!loading && slides.length === 0) return null;

    return (
        // <div className="relative overflow-hidden min-h-138 sm:min-h-163 bg-gray-100 flex justify-center items-center duration-200" >
        //     {/* background pattern */}
        //     <div className="h-175 w-175 bg-orange-200 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]">
        //     </div>

        //     {/* hero section */}
        //     <div className="container mx-auto pb-8 sm:pb-0">
        //         <Slider {...settings}>
        //             {slides.map((slide) => (
        //                 <div key={slide.id}>
        //                     <div className="grid grid-cols-1 sm:grid-cols-2">
        //                         <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
        //                             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
        //                                 {slide.title}
        //                             </h1>
        //                             <p className="text-sm">
        //                                 {slide.description}
        //                             </p>
        //                             <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
        //                                 <Link to={getSlideLink(slide)}>
        //                                     <button className="bg-linear-to-r bg-orange-400 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
        //                                         {slide.button_text}
        //                                     </button>
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                         <div className="order-1 sm:order-2">
        //                             <div className="relative z-10">
        //                                 <img
        //                                     src={getImageUrl(slide.image)}
        //                                     alt={slide.title}
        //                                     className="w-75 h-75 sm:h-112 sm:w-123 sm:scale-105 lg:scale-120 object-contain mx-auto"
        //                                 />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </Slider>
        //     </div>
        // </div>

        <div className="relative overflow-hidden min-h-138 sm:min-h-163 bg-gray-100 flex justify-center items-center duration-200" >
            {/* background pattern */}
            <div className="h-175 w-175 bg-orange-200 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]">
            </div>

            {/* hero section */}
            <div className="container mx-auto pb-8 sm:pb-0">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                                        {slide.title}
                                    </h1>
                                    <p className="text-sm">
                                        {slide.description}
                                    </p>
                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                                        <Link to={getSlideLink(slide)}>
                                            <button className="bg-linear-to-r bg-orange-400 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                                {slide.button_text}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="order-1 sm:order-2">
                                    <div className="relative z-10 flex justify-center">
                                        <img
                                            src={getImageUrl(slide.image)}
                                            alt={slide.title}
                                            className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-104 xl:h-104 object-contain mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;