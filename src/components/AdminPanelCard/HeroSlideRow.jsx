import { Pencil, Trash2 } from "lucide-react";
import { getImageUrl } from "../../Utils/imageUrl";

const SlideRow = ({ row, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-100">
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {row.sort_order}
      </td>
      <td className="px-5 py-2 border-r border-gray-200 text-center">
        <img
          src={getImageUrl(row.image) || "https://via.placeholder.com/80x40"}
          alt="slide"
          className="w-15 h-10 rounded-lg object-cover mx-auto"
        />
      </td>
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {row.title}
      </td>
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 line-clamp-2 text-left">
        {row.description}
      </td>
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {row.category_name || "All Sale"}
      </td>
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {row.button_text}
      </td>
      <td className="px-5 py-2 border-r border-gray-200 text-center">
        <span
          className={`inline-flex text-gray-600 items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full tracking-wide font-normal ${
            row.status === "active" ? "bg-green-300/50" : "bg-red-300/50"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              row.status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          {row.status === "active" ? "Active" : "Inactive"}
        </span>
      </td>
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

export default SlideRow;