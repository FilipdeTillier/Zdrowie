import { NextPage } from "next";
import { useMemo } from "react";

import { colors, getBackgroundColor } from "@helpers/colors";
import { appPaths } from "@helpers/paths";
import classNames from "classnames";

const NofFound: NextPage = () => {
  const bgColor = useMemo(() => getBackgroundColor(colors.body), []);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div
        className={classNames(
          "container flex flex-col items-center px-4 py-12 mx-auto text-center",
          bgColor
        )}
      >
        <h2 className="max-w-2xl mx-auto text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
          Ups... 404
        </h2>

        <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
          Page not found
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
          <a
            href={appPaths.home}
            className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Go to home page
          </a>
        </div>
      </div>
    </section>
  );
};

export default NofFound;
