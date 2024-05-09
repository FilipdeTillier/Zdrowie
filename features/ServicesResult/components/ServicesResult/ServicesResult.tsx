import { ReactElement, useEffect, useMemo, useState } from "react";

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
import { SearchIcons } from "@common/SearchIcons/SearchIcons";
import { SearchQueryParams } from "models/searchQueryParams";
import { useSearchParams } from "next/navigation";
import { getOffers } from "api/getOffers";

interface ServicesResultProps {
  services: ServiceProvider[];
  pages: number;
}

export const ServicesResult = ({
  services,
  pages,
}: ServicesResultProps): ReactElement => {
  const [foundServices, setFoundServices] = useState(services);
  const searchParams = useSearchParams();
  const speciality = searchParams.get(SearchQueryParams.SPECIALITY) || "";
  const {
    query: { page = 1 },
  } = useRouter();
  const sortedResults = useMemo(
    () =>
      foundServices.sort(
        (a, b) =>
          AccountTypeWeight[b.accountType] - AccountTypeWeight[a.accountType]
      ),
    [foundServices]
  );

  useEffect(() => {
    const serachOffers = async () => {
      try {
        const data = await getOffers();
        setFoundServices(data);
      } catch (err) {
        console.log(err);
      }
    };
    serachOffers();
  }, [speciality]);

  return (
    <div className="flex flex-col pt-20 md:pt-14 lg:flex-row sm:px-6 lg:px-0">
      <SearchIcons className="mb-3" />
      <div className="sm:w-full lg:w-1/3 lg:ml-6 sm:mb-6 lg:mb-0">
        <Map markers={foundServices} />
      </div>
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
    </div>
  );
};
