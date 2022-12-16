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
import { ContactLabel } from "../ContactLabel";

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
    website,
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

        <Text className="text-xs text-gray-400 hover:text-gray-400 mb-2">
          {description.length > MAX_DESCRIPTION_LENGTH
            ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
            : description}
        </Text>

        <div className="flex bg-slate-100">
          <ContactLabel
            value={phone}
            useShortcut
            type="phone"
            className="text-xs text-gray-700 hover:text-gray-900 mr-2"
          />
          <ContactLabel
            value={email}
            useShortcut
            type="email"
            className="text-xs text-gray-700 hover:text-gray-900 mr-2"
          />
          <ContactLabel
            value={website}
            useShortcut
            type="website"
            linkTarget="_blank"
            className="text-xs text-gray-700 hover:text-gray-900"
          />
        </div>
      </div>
    </div>
  );
};
