import { Icon } from "@common/Icon";
import { TPropsWithClassName } from "@common/interfaces";
import { Text } from "@common/Text";

import classNames from "classnames";
import { Fragment, useCallback, useMemo } from "react";

type RatingsProps = {
  rating: number;
};

export const Ratings = ({
  rating,
  className,
}: TPropsWithClassName<RatingsProps>) => {
  const MAX_RATING = 5;

  const roundRating = useMemo(() => Math.round(rating), [rating]);

  const ratingArray = useMemo(
    () =>
      Array(MAX_RATING)
        .fill("")
        .map((_a, index) => index + 1),
    [MAX_RATING]
  );

  const getRatingBlockWidth = useCallback(
    (ratingStep: number) => {
      if (rating - ratingStep >= 1) {
        return "w-full";
      }
      if (rating - ratingStep >= 0.75) {
        return "w-3/4";
      }
      if (rating - ratingStep >= 0.5) {
        return "w-2/4";
      }
      if (rating - ratingStep >= 0.25) {
        return "w-1/4";
      }
      return "w-0";
    },
    [rating]
  );

  const ratingResult = useMemo(
    () =>
      ratingArray.map((ratingStep) => (
        <Fragment key={ratingStep}>
          <div className={classNames("w-2 h-2 mr-0.5 border border-slate-300")}>
            <div
              className={classNames(
                "bg-lime-500 h-full",
                getRatingBlockWidth(ratingStep)
              )}
            ></div>
          </div>
          {}
        </Fragment>
      )),
    [ratingArray, getRatingBlockWidth]
  );

  return (
    <div className={classNames("flex items-center", className)}>
      <Text className="text-xs mr-2 text-lime-600 hover:text-lime-600 cursor-pointer">
        {rating}
      </Text>
      <div className="flex items-center mr-1">{ratingResult}</div>
    </div>
  );
};
