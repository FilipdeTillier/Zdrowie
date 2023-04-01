import { ReactElement, useMemo } from "react";

import {
  AccountTypeWeight,
  ServiceProvider,
} from "../../interfaces/servicesProvider";
import { ServiceCard } from "../ServiceCard";
import { Map } from "@common/Map";
import { Pagination } from "@common/Pagination";
import { useRouter } from "next/router";
import { useSelector, useStore } from "react-redux";
import { selectResults } from "@features/ServicesResult/store/servicesSlice";

interface ServicesResultProps {
  services: ServiceProvider[];
  pages: number;
}

export const ServicesResult = ({
  services,
  pages,
}: ServicesResultProps): ReactElement => {
  const {
    query: { page = 1 },
  } = useRouter();
  const sortedResults = useMemo(
    () =>
      services.sort(
        (a, b) =>
          AccountTypeWeight[b.accountType] - AccountTypeWeight[a.accountType]
      ),
    [services]
  );

  return (
    <div className="flex pt-20 md:pt-14 sm:flex-col-reverse lg:flex-row sm:px-6 lg:px-0">
      <div className="sm:w-full lg:w-2/3">
        {sortedResults.length ? (
          sortedResults.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p>No dataa</p>
        )}
        <Pagination
          currentPage={Number(page)}
          pages={pages}
          nextPage={() => {}}
          prevPage={() => {}}
          goToPage={() => {}}
          className="items-center justify-center mb-12"
        />
      </div>
      <div className="sm:w-full lg:w-1/3 lg:ml-6 sm:mb-6 lg:mb-0">
        <Map markers={services} />
      </div>
    </div>
  );
};
