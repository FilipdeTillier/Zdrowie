import { SearchForm } from "./SearchForm";

export const SearchRecords = () => {
  return (
    <div className="w-full search-bar flex justify-center content-center ">
      <div className="search-bar__background w-full"></div>
      <SearchForm />
    </div>
  );
};
