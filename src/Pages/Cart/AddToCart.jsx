import { useLocation } from "react-router-dom";
import Img from "../../assets/cartHeroImg.jpg";
import CartRow from "../../components/Cart/CartRow";

const AdToCart = () => {
  const location = useLocation();
  const product = location.product;
  return (
    <div>
      <img
        className="w-full h-80 object-cover"
        src={Img}
        alt="cart section banner image"
      />

      <div className="max-w-7xl mx-auto py-10 flex flex-wrap gap-10  w-11/12">
        <CartRow product={product} />
        <div className="lg:w-87 h-125 bg-gray-100  py-10 mt-0 md:mt-14 px-6 rounded-lg  md:w-full">
          <div className="flex flex-col border-b gap-6 border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Total</h2>
            <p className="flex items-center gap-4 mt-3 text-base">
              Sub Total
              <span className="font-bold text-lg">$ 259.96</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span className=" text-gray-500">
                Standard delivery within 3-5 business days
              </span>
            </p>
          </div>
          <p className="flex justify-between mt-6  text-lg">
            Total Amount
            <span className="font-bold text-xl"> $ 259.96 </span>
          </p>
          <button className="bg-orange-500 text-white text-base w-full py-3 mt-6 hover:bg-orange-600 duration-200 rounded">
            Proceed to Checkout
          </button>

          <button className="bg-orange-500 text-white text-base w-full py-3 mt-6 hover:bg-orange-600 duration-200 rounded">
            Go for Payment
          </button>

          {/* <CartModal>
            <div>
              <p className="mb-7">Please Login to checkout</p>
            </div>
            <Link to="/login">
              <button className="w-96  text-base font-semibold border border-gray-300 px-6 py-2 hover:bg-orange-500  mt-6  cursor-pointer rounded bg-gray-100 text-black hover:text-white">
                LOGIN
              </button>
            </Link>
          </CartModal> */}
        </div>
      </div>
    </div>
  );
};

export default AdToCart;
