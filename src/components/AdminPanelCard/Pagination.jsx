import { ChevronLeft, ChevronRight } from "lucide-react";
function getPageNumbers(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  // শুরুর দিকে — 1 2 3 4 ... last
  if (current <= 4) return [1, 2, 3, 4, "...", total];

  // শেষের দিকে — 1 ... last-3 last-2 last-1 last
  if (current >= total - 2) return [1, "...", total - 3, total - 2, total - 1, total];

  // মাঝখানে — 1 ... current-1 current current+1 ... last
  return [1, "...", current - 1, current, current + 1, "...", total];
}
export default function Pagination({
  totalItems = 200,
  itemsPerPage = 10,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, totalItems);
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center justify-between">
      <p className="text-xs text-gray-700">
        Showing <span className="font-medium">{from}</span> to{" "}
        <span className="font-medium">{to}</span> of{" "}
        <span className="font-medium">{totalItems}</span> results
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center px-1 py-1 text-xs hover:rounded-lg text-gray-500 hover:bg-gray-300 transition-colors disabled:opacity-40"
        >
          <ChevronLeft size={20} /> Back
        </button>

        {pages.map((page, i) =>
          page === "..." ? (
            <span key={`dots-${i}`} className="px-1 py-1 text-xs text-gray-400">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-2 py-1 rounded-lg text-xs transition-colors ${
                currentPage === page
                  ? "bg-orange-400 text-white"
                  : "text-gray-500 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center px-1 py-1 text-xs hover:rounded-lg text-gray-500 hover:bg-gray-300 transition-colors disabled:opacity-40"
        >
          Next <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
