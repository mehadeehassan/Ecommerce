import { FaStar } from "react-icons/fa";

export default function ProductCard({product}) {
    return (
        <div className="space-y-3">
            <img src={product.productPicturePath} alt={product.title} className="h-55 w-38 object-cover rounded-md" />
            <div>
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-gray-500 text-sm">{product.color}</p>
                <p className="text-gray-500 text-sm">Price:{product.price}</p>
                <div className="flex items-center mt-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm text-gray-500 ml-1">{product.rating}</span>
                </div>
                <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-1 rounded-full mt-4 hover:scale-105 duration-200">
                    Order Now
                </button>
            </div>
        </div>
    )
}