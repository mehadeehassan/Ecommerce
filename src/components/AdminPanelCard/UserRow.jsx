import { Pencil, Trash2 } from "lucide-react";

const UserRow = ({ Row, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-100">
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px]">
        {Row.name}
      </td>
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px]">
        {Row.email}
      </td>
      <td className="px-5 py-2">
        <span className="inline-flex text-gray-600 items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full bg-green-300/50 tracking-wide font-normal">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          {Row.status}
        </span>
      </td>
      <td className="px-5 py-2 text-gray-500">
        <div className="flex justify-end gap-4">
          <button onClick={onEdit} className="text-blue-600">
            <Pencil size={18} strokeWidth={2.5} />
          </button>
          <button onClick={() => onDelete(Row.name)} className="text-red-400">
            <Trash2 size={18} strokeWidth={2.5} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
