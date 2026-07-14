import { Pencil, Trash2 } from "lucide-react";
import { getImageUrl } from "../../Utils/imageUrl";

const ProductRow = ({ Row, onEdit, onDelete }) => {
  const hasDiscount = Row.discount_percentage && Row.discount_percentage > 0;
  const discountedPrice = hasDiscount
    ? (
        Row.product_price -
        (Row.product_price * Row.discount_percentage) / 100
      ).toFixed(2)
    : null;

  return (
    <tr className="border-b border-gray-100">
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {Row.serial}
      </td>
      <td className="px-5 py-2 border-r border-gray-200 text-center">
        <img
          src={getImageUrl(Row.image) || "https://via.placeholder.com/80x40"}
          alt="product"
          className="w-15 h-10 rounded-lg object-cover mx-auto"
        />
      </td>
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {Row.product_name}
      </td>
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {Row.brand_name}
      </td>
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {Row.category_name}
      </td>
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {Row.product_code}
      </td>

      {/* Price */}
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {hasDiscount ? (
          <div className="flex flex-col gap-0.5">
            <span className="line-through text-gray-400 text-[11px]">
              ${Row.product_price}
            </span>
            <span className="text-orange-500 font-semibold">
              ${discountedPrice}
            </span>
          </div>
        ) : (
          <span>${Row.product_price}</span>
        )}
      </td>

      {/* Discount % — header order অনুযায়ী Price-এর ঠিক পরে */}
      <td className="px-5 py-2 border-r border-gray-200 text-center">
        {hasDiscount ? (
          <span className="inline-flex text-[10px] bg-red-100 text-red-500 px-2 py-0.5 rounded-full font-medium">
            {Row.discount_percentage}% OFF
          </span>
        ) : (
          <span className="text-gray-300 text-xs">—</span>
        )}
      </td>

      {/* On Sale */}
      <td className="px-5 py-2 border-r border-gray-200 text-center">
        <span
          className={`inline-flex text-[10px] px-2 py-0.5 rounded-full font-medium ${
            Row.is_on_sale
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          {Row.is_on_sale ? "Yes" : "No"}
        </span>
      </td>

      {/* Description — এখন On Sale-এর পরে (header order অনুযায়ী) */}
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 line-clamp-2 text-left">
        {Row.description}
      </td>

      {/* Status */}
      <td className="px-5 py-2 border-r border-gray-200 text-center">
        <span
          className={`inline-flex text-gray-600 items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full tracking-wide font-normal ${
            Row.status === 1 || Row.status === "Active"
              ? "bg-green-300/50"
              : "bg-red-300/50"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              Row.status === 1 || Row.status === "Active"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          ></span>
          {Row.status === 1 || Row.status === "Active" ? "Active" : "Inactive"}
        </span>
      </td>

      {/* Action */}
      <td className="px-5 py-2 text-gray-500 border-r border-gray-200 text-center">
        <div className="flex justify-end gap-4">
          <button onClick={onEdit} className="text-blue-600" type="button">
            <Pencil size={18} strokeWidth={2.5} />
          </button>
          <button onClick={onDelete} className="text-red-400" type="button">
            <Trash2 size={18} strokeWidth={2.5} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;