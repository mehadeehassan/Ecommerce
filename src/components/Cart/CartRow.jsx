import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Img from "../../assets/shopping.webp";

const CartRow= () => {
    return (
        <div className="w-full lg:w-2/3 items-center ">
            <div className="w-full text-center md:text-left">
                <h2 className="text-2xl font-medium">Shopping Cart</h2>
            </div>
            <div className="">
                <div className="flex items-center justify-center md:justify-between gap-3 mt-6 border-b border-b-gray-200 flex-col md:flex-row p-2 py-4 md:py-2 bg-gray-100 shadow-sm rounded-xl">
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-3 md:mt-0">
                        <MdOutlineClose className="text-xl text-gray-600 hover:text-orange-500 cursor-pointer duration-300 ml-2 " />
                        <img
                            className="w-36 h-36 object-cover rounded-2xl border border-gray-200"
                            src={Img}
                            alt="product image"
                        />
                    </div>
                    <h2 className="w-52 text-center">Wireless Headphones</h2>
                    <p className="w-10 text-center">49.99</p>
                    <div className="flex items-center gap-6 border px-4 py-2">
                        <p className="text-sm">Quantity</p>
                        <div className="flex items-center gap-4 text-sm font-semibold">
                            <span className="hover:bg-orange-400 hover:text-white px-2 rounded-full duration-500 cursor-pointer">-</span>
                            1
                            <span className="hover:bg-orange-400 hover:text-white px-2 rounded-full duration-500 cursor-pointer">+</span>
                        </div>
                    </div>
                    <p className="w-20 text-center">$ 49.99</p>
                </div>
            </div>

            <button className="bg-orange-500 w-full text-white mt-8 py-1 px-6 hover:bg-orange-600 rounded">
                Reset Cart
            </button>
            <Link to="/">
                <button className="mt-8 flex items-center gap-2 text-gray-600 hover:text-orange-500 duration-300">
                    <span><HiOutlineArrowLeft /></span>
                    Go Shopping
                </button>
            </Link>
        </div>
    );
};

export default CartRow;