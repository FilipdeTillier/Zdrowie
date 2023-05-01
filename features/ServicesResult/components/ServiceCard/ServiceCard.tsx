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
import { DatePicker } from "@common/DatePicker/DatePicker";

const services: { name: string; price: number }[] = [
  { name: "Trening personalny", price: 150 },
  { name: "Rozpiska treningowa", price: 120 },
  { name: "Konsultacja online", price: 80 },
  { name: "bebebe gsadf sdfasf sdfsfd asf dasf sfsafd sa fs fd", price: 80 },
  { name: "bebebe gsadf sdfasf sdfsfd asf dasf sfsafd sa fs fd", price: 80 },
  { name: "bebebe gsadf sdfasf sdfsfd asf dasf sfsafd sa fs fd", price: 80 },
  { name: "bebebe gsadf sdfasf sdfsfd asf dasf sfsafd sa fs fd", price: 80 },
  { name: "bebebe gsadf sdfasf sdfsfd asf dasf sfsafd sa fs fd", price: 80 },
];

interface ServiceResultProps {
  service: ServiceProvider;
}

const mockImage =
  "data:image/jpeg;base64,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";

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
  const SERVICES_LENGTH_LIMIT = 3;
  const { formatMessage } = useIntl();
  const cardBorder = useMemo(
    () => (accountType === "gold" ? "border-2 border-l-lime-500" : ""),
    [accountType]
  );
  const cardText = useMemo(
    () => (accountType === "gold" ? "border-2 border-l-lime-500" : ""),
    [accountType]
  );

  const shownServices = useMemo(
    () => (extended ? services : services.slice(0, SERVICES_LENGTH_LIMIT)),
    [extended]
  );

  return (
    <div
      className={classNames(
        "flex w-full overflow-hidden bg-white mb-10 border",
        cardBorder
      )}
    >
      <div className="w-2/3 bg-cover flex flex-col p-5">
        {/* TODO: add server images and change img to Image component from next */}
        <div className="flex mb-4">
          <div className="w-28 h-28 min-w-28 rounded-full overflow-hidden flex justify-center align-center mr-4">
            <img
              src={mockImage}
              alt={name}
              className="overflow-hidden"
              width="100%"
              height="auto"
            />
          </div>
          <div className="flex flex-col min-w-6/10">
            <Link href={`${appPaths.offer}/${id}`}>
              <Text className="text-lg font-bold text-gray-800 capitalize">
                {name}
              </Text>
            </Link>
            <div className="flex">
              <Text className="text-md text-gray-700 font-normal">
                {formatMessage({ id: serviceType })}{" "}
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
            {shownServices.map((service) => (
              <li className="flex items-center mb-2" key={service.name}>
                <span className="w-1.5 h-1.5 bg-lime-400 block rounded-full mr-2"></span>
                <div className="flex justify-between align-center md:w-9/12">
                  <Text className="text-sm text-ellipsis overflow-hidden whitespace-nowrap mr-2">
                    {service.name}
                  </Text>
                  <Text className="text-sm font-semibold">{`${service.price}zł`}</Text>
                </div>
              </li>
            ))}
            <Text
              className="hover:underline hover:cursor-pointer text-sm text-gray-400"
              onClick={() => setExtended(!extended)}
              type="span"
            >
              {extended
                ? formatMessage({
                    id: "showLess",
                    defaultMessage: "Pokaz mniej",
                  })
                : formatMessage({
                    id: "showMore",
                    defaultMessage: "Pokaz więcej",
                  })}
            </Text>
          </ul>
        </div>
      </div>

      <div className="calendar-wrapper w-1/3 p-4 md:p-4 flex flex-col justify-between border-2">
        <DatePicker
          className=""
          onChange={() => {}}
          value={new Date()}
          minDate={new Date()}
          maxDate={new Date()}
          disabled
          placeholder="Szukaj"
        />
      </div>
    </div>
  );
};
