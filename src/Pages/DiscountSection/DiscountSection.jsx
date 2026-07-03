/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosPublic from "../../Pages/Utils/axiosPublic";
import { getImageUrl } from "../../Pages/Utils/imageUrl";
import ProductCard from "../../components/ProductCard/ProductCard";

const DiscountSection = () => {
  const [discountProducts, setDiscountProducts] = useState([]);

  useEffect(() => {
    handleGetDiscountProducts();
  }, []);

  const handleGetDiscountProducts = async () => {
    try {
      const response = await axiosPublic.get("/getAllDiscountedProducts");
      if (response.status === 200) {
        setDiscountProducts(response.data.data.slice(0, 6));
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (discountProducts.length === 0) return null;

  return (
    <div className="container mx-auto py-12">
  <div className="text-center mb-10 max-w-150 mx-auto relative">
    <p className="text-sm text-orange-400">Limited Time Offer</p>
    <h1 className="text-3xl font-bold"> On Sale</h1>
    <p className="text-xs text-gray-400">
      Grab these deals before they're gone
    </p>
    <div className="w-20 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
  </div>

  <div className="flex flex-wrap justify-center gap-5">
    {discountProducts.map((item) => (
      <div key={item.product_id} className="w-full sm:w-[calc(33.333%-14px)] md:w-[calc(25%-15px)] lg:w-[calc(16.666%-17px)]">
        <ProductCard
          product={{
            productPicturePath: getImageUrl(item.image),
            name: item.product_name,
            brand: item.brand_name,
            price: item.product_price,
            discountedPrice: item.discounted_price,
            discountPercentage: item.discount_percentage,
            code: item.product_code,
            description: item.description,
          }}
        />
      </div>
    ))}
  </div>

  <div className="text-center mt-10">
    <Link
      to="/products/discount/all"
      className="inline-block border border-orange-400 text-orange-500 text-sm font-medium px-6 py-2 rounded-full hover:bg-orange-400 hover:text-white transition-all duration-200"
    >
      View All Discounts →
    </Link>
  </div>
</div>
  );
};

export default DiscountSection;