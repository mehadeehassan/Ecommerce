// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../Redux/cartSlice";

// export default function ProductCard({ product }) {
//   const dispatch = useDispatch();
//   const [isAdded, setIsAdded] = useState(false);

//   const hasDiscount =
//     product.discountPercentage && product.discountPercentage > 0;

//   const handleAddToCart = () => {
//     const finalPrice = hasDiscount
//       ? Number(product.discountedPrice)
//       : Number(product.price);

//     dispatch(
//       addToCart({
//         ...product,
//         price: finalPrice,
//         originalPrice: product.price,
//       }),
//     );
//     toast.success(`${product.name} added to cart!`);
//     setIsAdded(true);
//     setTimeout(() => setIsAdded(false), 1500);
//   };

//   return (
//     <div className="group bg-white border border-gray-100 rounded-2xl p-3 flex flex-col h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//       <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-gray-50 mb-3.5">
//         <img
//           src={product.productPicturePath}
//           alt={product.name}
//           className="w-300 h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />

//         {hasDiscount && (
//           <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
//             -{product.discountPercentage}%
//           </span>
//         )}

//         <span className="absolute bottom-2 right-2 bg-white text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-100 shadow-sm">
//           {hasDiscount ? (
//             <span className="flex items-center gap-1.5">
//               <span className="line-through text-gray-400 text-[10px]">
//                 ${product.price}
//               </span>
//               <span className="text-orange-500">
//                 ${product.discountedPrice}
//               </span>
//             </span>
//           ) : (
//             <>${product.price}</>
//           )}
//         </span>
//       </div>

//       <p className="text-[10px] font-semibold uppercase tracking-wider text-orange-500">
//         {product.brand}
//       </p>
//       <h3
//         className="font-semibold text-gray-900 text-sm leading-snug mt-0.5 truncate"
//         title={product.name}
//       >
//         {product.name}
//       </h3>

//       <p
//         className="text-xs text-gray-400 leading-relaxed mt-1.5 flex-1 line-clamp-2"
//         title={product.description}
//       >
//         {product.description}
//       </p>

//       <div className="flex items-center justify-between border-t border-gray-100 mt-2.5 pt-2.5">
//         <span className="text-[11px] text-gray-400">{product.code}</span>

//         <button
//           onClick={handleAddToCart}
//           disabled={isAdded}
//           className={`flex items-center gap-1 text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
//             isAdded ? "bg-green-500" : "bg-orange-500 hover:bg-orange-600"
//           }`}
//         >
//           {isAdded ? (
//             <>Added ✓</>
//           ) : (
//             <>
//               Order
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-3 h-3"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 10a.75.75 0 01.75-.75h10.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H3.75A.75.75 0 013 10z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const hasDiscount =
    product.discountPercentage && product.discountPercentage > 0;

  const handleAddToCart = () => {
    const finalPrice = hasDiscount
      ? Number(product.discountedPrice)
      : Number(product.price);

    dispatch(
      addToCart({
        ...product,
        price: finalPrice,
        originalPrice: product.price,
      }),
    );
    toast.success(`${product.name} added to cart!`);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-3 flex flex-col h-full w-full min-w-0 shadow-sm md:hover:shadow-xl md:hover:-translate-y-1 transition-all duration-300">
      <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden bg-gray-50 mb-3.5">
        <img
          src={product.productPicturePath}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center md:group-hover:scale-105 transition-transform duration-500"
        />
        {hasDiscount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm z-10">
            -{product.discountPercentage}%
          </span>
        )}

        <span className="absolute bottom-2 right-2 bg-white text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-100 shadow-sm z-10">
          {hasDiscount ? (
            <span className="flex items-center gap-1.5">
              <span className="line-through text-gray-400 text-[10px]">
                ${product.price}
              </span>
              <span className="text-orange-500">
                ${product.discountedPrice}
              </span>
            </span>
          ) : (
            <>${product.price}</>
          )}
        </span>
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-wider text-orange-500">
        {product.brand}
      </p>
      <h3
        className="font-semibold text-gray-900 text-sm leading-snug mt-0.5 truncate w-full"
        title={product.name}
      >
        {product.name}
      </h3>

      <p
        className="text-xs text-gray-400 leading-relaxed mt-1.5 flex-1 line-clamp-2 w-full"
        title={product.description}
      >
        {product.description}
      </p>

      <div className="flex items-center justify-between border-t border-gray-100 mt-2.5 pt-2.5">
        <span className="text-[11px] text-gray-400">{product.code}</span>
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`flex items-center gap-1 text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 shrink-0 ${
            isAdded ? "bg-green-500" : "bg-orange-500 md:hover:bg-orange-600"
          }`}
        >
          {isAdded ? (
            <>Added ✓</>
          ) : (
            <>
              Order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}