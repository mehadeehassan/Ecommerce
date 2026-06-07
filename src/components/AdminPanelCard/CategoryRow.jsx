import { Pencil, Trash2 } from "lucide-react";

const CategoryRow = ({ row, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="px-5 py-2 text-xs text-gray-500 border-r border-gray-200 text-center">
        {row.id}
      </td>
      <td className="px-5 py-2 text-xs text-gray-500 border-r border-gray-200 text-center">
        {row.name}
      </td>
      <td className="px-5 py-2 text-xs text-gray-500 text-center">
        <div className="flex justify-center gap-4">
          <button onClick={onEdit} className="text-blue-500" type="button">
            <Pencil size={15} strokeWidth={2.5} />
          </button>
          <button onClick={onDelete} className="text-red-400" type="button">
            <Trash2 size={15} strokeWidth={2.5} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CategoryRow;