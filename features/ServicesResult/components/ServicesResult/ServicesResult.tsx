import { ReactElement } from "react";

import {
  AccountTypeWeight,
  ServiceProvider,
} from "../../interfaces/servicesProvider";
import { ServiceCard } from "../ServiceCard";
import { Map } from "@common/Map";

interface ServicesResultProps {
  services: ServiceProvider[];
}

export const ServicesResult = ({
  services,
}: ServicesResultProps): ReactElement => {
  const sortedResults = services.sort(
    (a, b) =>
      AccountTypeWeight[b.accountType] - AccountTypeWeight[a.accountType]
  );
  return (
    <div className="flex pt-20 md:pt-14 sm:flex-col-reverse lg:flex-row sm:px-6 lg:px-0">
      <div className="sm:w-full lg:w-2/3">
        {sortedResults.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className="sm:w-full lg:w-1/3 lg:ml-6 sm:mb-6 lg:mb-0">
        <Map markers={services} />
      </div>
    </div>
  );
};
