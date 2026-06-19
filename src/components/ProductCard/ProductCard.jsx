export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="aspect-4/5 rounded-xl overflow-hidden bg-gray-50 mb-3">
        <img
          src={product.productPicturePath}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="font-semibold text-sm truncate" title={product.name}>
        {product.name}
      </h3>
      <p className="text-orange-500 text-xs font-medium mt-0.5">
        {product.brand}
      </p>

      <div className="flex items-center justify-between text-[11px] text-gray-400 mt-1">
        <span>{product.code}</span>
        <span className="text-gray-600 font-medium">{product.price}</span>
      </div>

      <p
        className="text-xs text-gray-400 mt-2 mb-3 line-clamp-2"
        title={product.description}
      >
        {product.description}
      </p>

      <button className="mt-auto bg-orange-400 hover:bg-orange-600 text-white text-xs font-medium py-2 rounded-full hover:scale-105 duration-200">
        Order Now
      </button>
    </div>
  );
}
