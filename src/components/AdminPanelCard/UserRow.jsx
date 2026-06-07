import { Pencil, Trash2 } from "lucide-react";

const UserRow = ({ Row, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-100">
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {Row.name}
      </td>
      <td className="px-5 py-2 text-gray-500 font-normal text-[12px] border-r border-gray-200 text-left">
        {Row.email}
      </td>
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

export default UserRow;
