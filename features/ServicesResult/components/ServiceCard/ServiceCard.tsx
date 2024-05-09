import { ReactElement, useMemo, useState } from "react";
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
import { Icon } from "@common/Icon";

interface ServiceResultProps {
  service: ServiceProvider;
}

const mockImage =
  "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png?resize=1200:*";

export const ServiceCard = ({
  service: {
    name,
    priceFrom,
    priceTo,
    id,
    picture,
    locations,
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
  const [extended, setExtended] = useState(false);
  const MAX_SHORT_DESCRIPTION_LENGTH = 160;
  const MAX_DESCRIPTION_LENGTH = 320;
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
      <div className="w-1/2 bg-cover flex flex-col p-5">
        {/* TODO: add server images and change img to Image component from next */}
        <div className="flex mb-4">
          <div className="w-28 h-28 rounded-full overflow-hidden flex justify-center align-center mr-4">
            <img
              src={mockImage}
              alt={name}
              className="overflow-hidden"
              width="100%"
              height="auto"
            />
          </div>
          <div className="flex flex-col">
            <Link href={`${appPaths.offer}/${id}`}>
              <Text className="text-lg font-bold text-gray-800 capitalize">
                {name}
              </Text>
            </Link>
            <div className="flex">
              <p className="text-gray-900 mr-2 font-medium">Zakres usług:</p>{" "}
              <Text className="text-md text-gray-700 dark:text-gray-400 font-normal flex">
                {formatMessage({ id: serviceType })}
              </Text>
            </div>
            <Link
              href={`${appPaths.offer}/${id}#reviews`}
              className="flex mt-1 item-center mb-2"
            >
              <Ratings rating={rating} />
              <Text className="text-sm hover:underline">
                {noOfRatings}{" "}
                {formatMessage({ id: "reviews", defaultMessage: "Opinie" })}
              </Text>
            </Link>
          </div>
        </div>
        {locations.map(({ name, address, position }) => (
          <Text
            key={name + position}
            className="text-sm mb-2 flex items-center"
          >
            <Icon icon="mapPin" className="fill-lime-500" />
            {address}
          </Text>
        ))}
        <div>
          <Text className="text-sm mb-2 pl-3 flex items-center font-medium">
            {formatMessage({ id: "services", defaultMessage: "Usługi" })}:
          </Text>
          <ul className="pl-3 mb-4">
            <li className="flex items-center mb-2">
              <span className="w-1.5 h-1.5 bg-lime-400 block rounded-full mr-2"></span>
              <Text className="text-sm">Trening personalny</Text>
            </li>
            <li className="flex items-center mb-2">
              <span className="w-1.5 h-1.5 bg-lime-400 block rounded-full mr-2"></span>
              <Text className="text-sm">Rozpiska treningowa</Text>
            </li>
            <li className="flex items-center mb-2">
              <span className="w-1.5 h-1.5 bg-lime-400 block rounded-full mr-2"></span>
              <Text className="text-sm">Konsultacja online</Text>
            </li>
          </ul>
        </div>
        {/* <div>
          <Text className="text-sm mb-2">
            <span className="text-gray-900 mr-2 font-medium">Opis:</span>
            {description.length >
            (extended ? MAX_DESCRIPTION_LENGTH : MAX_SHORT_DESCRIPTION_LENGTH)
              ? `${description.slice(
                  0,
                  extended
                    ? MAX_DESCRIPTION_LENGTH
                    : MAX_SHORT_DESCRIPTION_LENGTH
                )}...`
              : description}{" "}
            <span
              className="hover:underline hover:cursor-pointer"
              onClick={() => setExtended(!extended)}
            >
              {extended
                ? formatMessage({ id: "less", defaultMessage: "Mniej" })
                : formatMessage({ id: "more", defaultMessage: "Więcej" })}
            </span>
          </Text>
        </div> */}
      </div>

      <div className="calendar-wrapper w-1/2 p-4 md:p-4 flex flex-col justify-between border-2"></div>
      {/* <div className="flex flex-col">
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

          <Text className="text-xs mb-2 flex items-center">
            <Icon icon="mapPin" className="fill-lime-500" />
            {location}
          </Text>
        </div>

        <div>
          <Text className="text-xs mb-2 flex items-center">
            {formatMessage({ id: "services", defaultMessage: "Usługi" })}:
          </Text>
          <ul className="list-disc pl-5 mb-4">
            <li className="">Konsultacje online</li>
            <li className="">Rozpiski treningowe</li>
            <li className="">Trening personalny</li>
          </ul>
        </div>

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
        </div> */}
    </div>
  );
};
