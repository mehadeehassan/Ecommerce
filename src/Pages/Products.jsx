import React from 'react'
import Img1 from "../assets/woman/w1.png";
import Img2 from "../assets/woman/w2.png";
import Img3 from "../assets/woman/w3.avif";
import Img4 from "../assets/woman/w4.jpg";
import Img5 from "../assets/woman/w5.jpg";
import Img6 from "../assets/woman/w6.jpg";
import { FaStar } from "react-icons/fa";
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router';



function Products() {
  let {productType}  = useParams();
  productType = productType.replace(/-/g, ' '); 
  productType = productType.charAt(0).toUpperCase() + productType.slice(1);

  return (
    <div className="mt-14 mb-12 bg-white text-black">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-150 mx-auto">
          <p className="text-sm text-orange-400">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">{productType}</h1>
          <p className="text-xs text-gray-400">My best selling products for you</p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 place-items-center">
            <ProductCard product={{ productPicturePath: Img1, title: "Women Western", color: "Blue", price: "$100", rating: 5.0 }} />
            <ProductCard product={{ productPicturePath: Img2, title: "Women Formal", color: "Red", price: "$200", rating: 4.5 }} />
            <ProductCard product={{ productPicturePath: Img3, title: "Women Casual", color: "White", price: "$300", rating: 4.4 }} />
            <ProductCard product={{ productPicturePath: Img4, title: "Women Party", color: "Yellow", price: "$400", rating: 4.8 }} />
            <ProductCard product={{ productPicturePath: Img5, title: "Women T-Shirt", color: "Gray", price: "$500", rating: 4.2 }} />
            <ProductCard product={{ productPicturePath: Img6, title: "Women Jeans", color: "Pink", price: "$600", rating: 4.5 }} /> 
          </div>

        </div>
      </div>
    </div>
  );
}
export default Products;