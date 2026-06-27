/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/cartHeroImg.jpg";
import CartModal from "../../components/Cart/CartModal";
import CartRow from "../../components/Cart/CartRow";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
  resetCart,
} from "../../redux/cartSlice";

const AdToCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subTotal;

  const handleCheckout = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  };

  const handleGoForPayment = () => {
    navigate("/payment");
  };

  const handleRemove = (id) => {
    const product = cart.find((item) => item.code === id);
    dispatch(removeFromCart(id));
    toast.error(`Your ${product?.name || "Product"} has been removed!`);
  };

  const handleReset = () => {
    dispatch(resetCart());
    toast.error("Cart cleared successfully!");
  };

  return (
    <div>
      <img
        className="w-full h-80 object-cover"
        src={Img}
        alt="cart section banner image"
      />
      <div className="max-w-7xl mx-auto py-10 flex flex-wrap gap-10 w-11/12">
        <CartRow
          products={cart}
          removeFromCart={handleRemove}
          increaseQty={(id) => dispatch(increaseQty(id))}
          decreaseQty={(id) => dispatch(decreaseQty(id))}
          resetCart={handleReset}
        />
        <div className="lg:w-87 h-125 bg-gray-100 py-10 mt-0 md:mt-14 px-6 rounded-lg md:w-full">
          <div className="flex flex-col border-b gap-6 border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Total</h2>
            <p className="flex items-center gap-4 mt-3 text-base">
              Sub Total
              <span className="font-bold text-lg">$ {subTotal.toFixed(2)}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span className="text-gray-500">
                Standard delivery within 3-5 business days
              </span>
            </p>
          </div>
          <p className="flex justify-between mt-6 text-lg">
            Total Amount
            <span className="font-bold text-xl"> $ {total.toFixed(2)} </span>
          </p>
          <button
            onClick={handleCheckout}
            disabled={isLoggedIn}
            className={`text-white text-base w-full py-3 mt-6 duration-200 rounded ${
              isLoggedIn
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            Proceed to Checkout
          </button>
          {isLoggedIn && (
            <button
              onClick={handleGoForPayment}
              className="bg-orange-500 text-white text-base w-full py-3 mt-3 hover:bg-orange-600 duration-200 rounded"
            >
              Go for Payment
            </button>
          )}
        </div>
      </div>

      <CartModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
};

export default AdToCart;