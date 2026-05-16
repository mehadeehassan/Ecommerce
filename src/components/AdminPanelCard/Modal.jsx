import { X } from "lucide-react";

const Model = ({
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
  submitBtnText,
  icon: Icon,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-100 w-full max-w-md rounded-xl shadow-2xl overflow-hidden duration-200">
        <div className="flex items-center justify-between p-6">
          <h3 className="text-sm text-gray-600">{title}</h3>
          <button
            onClick={onClose}
            className="text-red-500 hover:bg-red-50 p-1 rounded-full transition-colors"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </div>

        <div className="p-5 space-y-4">{children}</div>

        <div className="p-5 flex justify-end">
          <button
            onClick={onSubmit}
            className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-2 py-1 rounded-lg transition-all shadow-md"
          >
            {Icon && <Icon size={16} />}
            {submitBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
