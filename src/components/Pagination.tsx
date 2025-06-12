import { Link } from 'react-router-dom';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

const Pagination = ({ currentPage, totalPages, baseUrl }: PaginationProps) => {
  const getPageUrl = (page: number) => {
    return `${baseUrl}&page=${page}`;
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    const halfVisible = Math.floor(maxVisible / 2);

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= halfVisible + 1) {
        for (let i = 1; i <= maxVisible - 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - halfVisible) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - maxVisible + 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 md:gap-4 mt-12 mb-8 px-4">
      {currentPage > 1 && (
        <Link
          to={getPageUrl(currentPage - 1)}
          className="px-4 md:px-6 py-2 md:py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:scale-105 font-medium"
        >
          ← 前へ
        </Link>
      )}

      <div className="flex items-center gap-1 md:gap-2">
        {getPageNumbers().map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-2 md:px-3 py-2 text-gray-500">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          return (
            <Link
              key={pageNum}
              to={getPageUrl(pageNum)}
              className={`min-w-[40px] md:min-w-[48px] px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all font-medium text-center ${
                currentPage === pageNum
                  ? 'bg-blue-600 text-white shadow-lg scale-110'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:scale-105'
              }`}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {currentPage < totalPages && (
        <Link
          to={getPageUrl(currentPage + 1)}
          className="px-4 md:px-6 py-2 md:py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:scale-105 font-medium"
        >
          次へ →
        </Link>
      )}
    </div>
  );
};

export default Pagination;