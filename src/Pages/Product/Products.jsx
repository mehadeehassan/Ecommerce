/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import axiosPublic from "../../Utils/axiosPublic";
import { getImageUrl } from "../../Utils/imageUrl";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {
  const { productType, category } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const isDiscountRoute = location.pathname.includes("/discount/");

  useEffect(() => {
    handleGetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productType, category]);

  const handleGetProducts = async () => {
    try {
      let response;

      if (isDiscountRoute) {
        if (category === "all") {
          response = await axiosPublic.get(`/getAllDiscountedProducts`);
          setCategoryName("All Discount");
        } else {
          response = await axiosPublic.get(
            `/getDiscountedProductsByCategory/${category}`,
          );
          setCategoryName(`${category} Discount`);
        }
      } else {
        response = await axiosPublic.get(
          `/getProductCategoryById/${productType}`,
        );
        setCategoryName(productType);
      }

      if (response.status === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log("Error:", error);
      setProducts([]);
    }
  };

  return (
    <div className="mt-14 mb-12 bg-white text-black">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-150 mx-auto">
          <p className="text-sm text-orange-400">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl font-bold">
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </h1>
          <p className="text-xs text-gray-400">
            My best selling products for you
          </p>
          <div className="w-20 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 place-items-center">
          {products.length === 0 ? (
            <p className="col-span-full text-center text-gray-400 py-10">
              {isDiscountRoute
                ? "No discounted products available right now."
                : "No products found."}
            </p>
          ) : (
            products.map((item) => (
              <ProductCard
                key={item.product_id || item.id}
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;