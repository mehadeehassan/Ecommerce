import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import axiosPublic from "../Utils/axiosPublic";
import { getImageUrl } from "../Utils/imageUrl";
import { addToCart } from "../../Redux/cartSlice";

const BestSelling = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    handleGetBestSelling();
  }, []);

  const handleGetBestSelling = async () => {
    setLoading(true);
    try {
      const response = await axiosPublic.get("/getAllProduct?page=1&limit=3&status=active");
      // const response = await axiosPublic.get("/getAllProduct?page=1&limit=3");
      if (response.status === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching best selling products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        code: product.product_code,
        name: product.product_name,
        price: product.product_price,
        description: product.description,
        brand: product.brand_name || "",
        productPicturePath: getImageUrl(product.image),
      }),
    );
    toast.success(`Your ${product.product_name} cart e added Successfully!`);
  };

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto">
        <div className="text-left mb-24 ml-4">
          <p className="text-sm text-orange-400">Top Rated Products for you</p>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-xs text-gray-400">
            My best selling products for you.
          </p>
          <div className="w-20 h-1  bg-orange-400 mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {loading ? (
            <p className="text-gray-400 col-span-full text-center">
              Loading...
            </p>
          ) : products.length === 0 ? (
            <p className="text-gray-400 col-span-full text-center">
              No products found
            </p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-75"
              >
                <div className="h-25">
                  <img
                    src={getImageUrl(product.image)}
                    alt={product.product_name}
                    className="max-w-35 block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{product.product_name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-orange-400 hover:scale-105 duration-200 text-white px-4 py-1 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-400"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
