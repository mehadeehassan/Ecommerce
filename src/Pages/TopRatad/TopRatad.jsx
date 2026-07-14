import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import axiosPublic from "../../Utils/axiosPublic";
import { getImageUrl } from "../../Utils/imageUrl";

const TopRatad = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    handleGetAllProduct();
  }, []);

  const handleGetAllProduct = async () => {
    setLoading(true);
    try {
      const response = await axiosPublic.get("/getAllProduct?page=1&limit=100&status=active");
      // const response = await axiosPublic.get("/getAllProduct?page=1&limit=100");
      if (response.status === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <div className="mt-14 mb-12 bg-white text-black">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-150 mx-auto">
          <p className="text-sm text-orange-400">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl font-bold">Top Selling Products</h1>
          <p className="text-xs text-gray-400">
            My best selling products for you
          </p>
          <div className="w-20 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Body Section */}
        <div>
          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : products.length === 0 ? (
            <p className="text-center text-gray-400">No products found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 place-items-center">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={{
                    code: product.product_code,
                    name: product.product_name,
                    price: product.product_price,
                    description: product.description,
                    brand: product.brand_name || "",
                    productPicturePath: getImageUrl(product.image),
                  }}
                />
              ))}
            </div>
          )}

          {!showAll && products.length > 6 && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="mt-10 bg-orange-400 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300"
              >
                View All Products
              </button>
            </div>
          )}

          {showAll && products.length > 6 && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAll(false)}
                className="mt-10 bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400 transition duration-300"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopRatad;
