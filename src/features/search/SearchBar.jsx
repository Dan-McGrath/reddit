import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchTerm,
  setSearchTerm,
  loadSearchResults,
  selectSearchResults,
} from "./searchSlice";
import { useEffect } from "react";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const searchResults = useSelector(selectSearchResults);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  useEffect(() => {
    dispatch(loadSearchResults(searchTerm));
  }, [searchTerm, dispatch]);

  return (
    <>
      <search className="min-w-20 max-h-10">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-5 h-4 lg:h-5 text-dark-gray"
            />
          </span>
          <input
            type="search"
            placeholder="Search Reddit"
            className="block w-full py-1 pr-3 bg-white border rounded-full shadow-sm sm:max-w-20 md:max-w-20 placeholder:italic placeholder:text-dark-gray border-dark-gray pl-9 focus:outline-none focus:border-logo focus:ring-logo focus:ring-1 sm:text-sm text-dark-gray md:py-2 sm:py-2"
            onChange={onSearchChangeHandler}
            value={searchTerm}
          />
        </label>
      </search>
      {searchResults.length > 0 && (
        <div className="absolute z-10 block p-2 mx-auto overflow-scroll overflow-x-hidden rounded-lg top-16 lg:top-16 max-w-96 bg-gray max-h-96">
          {searchResults.map((result) => (
            <div key={result.data.id} className="py-1 ">
              <SearchResults result={result} />
              <hr className="my-1 text-light-gray/40" />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
