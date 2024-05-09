import { getOffers } from "api/getOffers";
import { SearchForm } from "./SearchForm";

type Props = {
  data: any[];
};

export const SearchRecords = ({ data }: Props) => {
  return (
    <div className="w-full search-bar flex justify-center content-center ">
      <div className="search-bar__background w-full"></div>
      <SearchForm />
    </div>
  );
};
