import React from 'react';
import Img1 from "../../assets/Shirt/s1.png";
import Img2 from "../../assets/Shirt/s3.png";
import Img3 from "../../assets/Shirt/sw1.png";
import { FaStar } from "react-icons/fa";

const BestSelling = () => {
  return (
    <div className="py-10 bg-white">
        <div className="container mx-auto">
            {/* Header Section */}
            <div className="text-left mb-24">
                <p className="text-sm text-orange-400">Top Rated Products for you</p>
                <h1 className="text-3xl font-bold">Best Products</h1>
                <p className="text-xs text-gray-400">My best selling products for you.</p>
                <div className="w-60 h-1 bg-orange-400 mt-4 rounded-full"></div>
            </div>

            {/* Body Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                
                {/* Product 1 */}
                <div className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-75">
                    {/* image section */}
                    <div className="h-25">
                        <img 
                            src={Img1}
                            alt="Men Shirts" 
                            className="max-w-35 block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300" 
                        />
                    </div>
                    {/* details section */}
                    <div className="p-4 text-center">
                        <div className="w-full flex items-center justify-center gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                        </div>
                        <h1 className="text-xl font-bold">Men Shirts</h1>
                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                            Made of 100% cotton. Available in different colors. Comfortable to wear.
                        </p>
                        <button className="bg-orange-400 hover:scale-105 duration-200 text-white px-4 py-1 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-400">
                            Order Now
                        </button>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-75">
                    {/* image section */}
                    <div className="h-25">
                        <img 
                            src={Img2} 
                            alt="Formal Wear" 
                            className="max-w-35 block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300" 
                        />
                    </div>
                    {/* details section */}
                    <div className="p-4 text-center">
                        <div className="w-full flex items-center justify-center gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                        </div>
                        <h1 className="text-xl font-bold">Formal Wear</h1>
                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                            Made off 100% slick fabric. Available in different colors. Comfortable to wear.
                        </p>
                        <button className="bg-orange-400 hover:scale-105 duration-200 text-white px-4 py-1 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-400">
                            Order Now
                        </button>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-75">
                    {/* image section */}
                    <div className="h-25">
                        <img 
                            src={Img3} 
                            alt="Women Shirts" 
                            className="max-w-35 block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300" 
                        />
                    </div>
                    {/* details section */}
                    <div className="p-4 text-center">
                        <div className="w-full flex items-center justify-center gap-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                        </div>
                        <h1 className="text-xl font-bold">Women Shirts</h1>
                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                            Luxurious fabric. Available in different colors. Comfortable to wear.
                        </p>
                        <button className="bg-orange-400 hover:scale-105 duration-200 text-white px-4 py-1 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-400">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BestSelling;