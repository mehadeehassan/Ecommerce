import { Link } from "react-router-dom";

const CartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-96 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        <p className="mb-7 text-lg font-medium">Please Login to checkout</p>
        <Link to="/login">
          <button className="w-full text-base font-semibold border border-gray-300 px-6 py-2 hover:bg-orange-500 mt-2 cursor-pointer rounded bg-gray-100 text-black hover:text-white duration-200">
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartModal;
