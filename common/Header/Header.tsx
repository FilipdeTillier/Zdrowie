import Link from "next/link";
import { ReactElement, useMemo } from "react";

import {
  isValidSearchServiceObject,
  SearchForm,
} from "@features/SearchRecords/SearchForm";
import { useRouter } from "next/router";
import classNames from "classnames";

export const Header = (): ReactElement => {
  const { query } = useRouter();
  const defaultValues = useMemo(
    () =>
      isValidSearchServiceObject(query)
        ? query
        : { specialty: "", province: "" },
    [query]
  );

  return (
    <header className="sticky inset-0 z-10">
      <nav
        className={classNames(
          "relative bg-white shadow bg-white fixed drop-shadow-md"
        )}
      >
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link
              className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="/"
            >
              Brand
            </Link>
          </div>
          <div
            className={
              "absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center "
            }
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <SearchForm defaultValues={defaultValues} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
