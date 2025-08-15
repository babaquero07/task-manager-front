import { useCallback } from "react";

interface PaginationProps {
  pages: number;
  currentPage: number;
  onPageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Pagination = ({ pages, currentPage, onPageChange }: PaginationProps) => {
  const getPagesList = useCallback(() => {
    return Array.from({ length: pages }, (_, index) => index + 1);
  }, [pages]);

  return (
    <div className="flex justify-center items-center gap-2">
      {getPagesList().map((page) => (
        <input
          key={page}
          className="px-6 py-4 rounded-md bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300"
          type="radio"
          name="pagination"
          id={`page-${page}`}
          aria-labelledby={`page-${page}`}
          value={page}
          checked={page === currentPage}
          onChange={onPageChange}
        />
      ))}
    </div>
  );
};

export default Pagination;
