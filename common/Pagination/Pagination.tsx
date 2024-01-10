import { Icon } from "@common/Icon";
import { TPropsWithClassName } from "@common/interfaces";
import { appPaths, paths } from "@helpers/paths";
import classNames from "classnames";
import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  pages: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (pageNumber: number) => void;
};

export const Pagination = ({
  className,
  pages,
  currentPage,
  nextPage,
  prevPage,
  goToPage,
}: TPropsWithClassName<PaginationProps>) => {
  console.log(pages);
  const pagesArray = Array(pages)
    .fill("")
    .map((_el, index) => index + 1);

  return (
    <div className={classNames("flex", className)}>
      <Link
        href={`${appPaths.results}`}
        className={classNames(
          "flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md rtl:-scale-x-100",
          currentPage === 0
            ? "cursor-not-allowed"
            : "hover:bg-lime-500  hover:text-white"
        )}
      >
        <Icon icon="arrow" className="w-4 h-4 rotate-180" />
      </Link>

      {pagesArray.map((page) => (
        <div
          key={page}
          onClick={() => goToPage(page)}
          className={classNames(
            "hidden px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md sm:inline",
            page === currentPage
              ? "bg-lime-500 text-white"
              : "text-gray-700 hover:bg-lime-500 hover:text-white"
          )}
        >
          {page}
        </div>
      ))}

      <div
        onClick={nextPage}
        className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 hover:bg-lime-500  hover:text-white"
      >
        <Icon icon="arrow" className="w-4 h-4" />
      </div>
    </div>
  );
};
