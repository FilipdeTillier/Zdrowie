import { ReactElement, useMemo } from "react";
import { useIntl } from "react-intl";
import Image from "next/image";
import image from "@images/company.png";

import {
  AccountTypeWeight,
  ServiceProvider,
} from "@features/ServicesResult/interfaces/servicesProvider";
import Link from "next/link";
import { appPaths } from "@helpers/paths";
import { Ratings } from "../Rating";
import classNames from "classnames";
import { Text } from "@common/Text";

interface ServiceResultProps {
  service: ServiceProvider;
}

export const ServiceCard = ({
  service: {
    name,
    priceFrom,
    priceTo,
    id,
    picture,
    rating,
    description,
    email,
    noOfRatings,
    phone,
    accountType,
    serviceType,
  },
}: ServiceResultProps): ReactElement => {
  const MAX_DESCRIPTION_LENGTH = 160;
  const { formatMessage } = useIntl();
  const cardBorder = useMemo(
    () => (accountType === "gold" ? "border-2 border-l-lime-500" : ""),
    [accountType]
  );
  const cardText = useMemo(
    () => (accountType === "gold" ? "border-2 border-l-lime-500" : ""),
    [accountType]
  );
  return (
    <div
      className={classNames(
        "flex w-full overflow-hidden bg-white mb-10 border",
        cardBorder
      )}
    >
      <div className="w-1/3 bg-cover flex justify-center align-center">
        <Image src={picture} alt={name} className="" width={100} height={100} />
      </div>

      <div className="w-2/3 p-4 md:p-4">
        <Link href={`${appPaths.offer}/${id}`}>
          <Text className="text-lg font-bold text-gray-800">{name}</Text>
        </Link>

        <Text className="text-sm text-gray-600 dark:text-gray-400 font-normal">
          {formatMessage({ id: serviceType })}
        </Text>

        <Link
          href={`${appPaths.offer}/${id}#reviews`}
          className="flex mt-2 item-center mb-2"
        >
          <Ratings rating={rating} />
          <Text className="text-xs">
            {noOfRatings}{" "}
            {formatMessage({ id: "reviews", defaultMessage: "Opinie" })}
          </Text>
        </Link>

        <Text className="text-xs text-gray-500">
          {description.length > MAX_DESCRIPTION_LENGTH
            ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
            : description}
        </Text>

        {/* <div className="flex justify-between mt-3 item-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            $220
          </h1>
          <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
            Add to Cart
          </button>
        </div> */}
      </div>
    </div>
  );
};
