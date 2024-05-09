import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
} from "./searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <>
      <search className="min-w-fit">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="h-5 w-5 text-dark-gray"
            />
          </span>
          <input
            type="search"
            placeholder="Search Reddit"
            className="placeholder:italic placeholder:text-dark-gray block bg-white w-full border border-dark-gray rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-logo focus:ring-logo focus:ring-1 sm:text-sm text-dark-gray min-w-96"
            onChange={onSearchChangeHandler}
            value={searchTerm}
          />
        </label>
      </search>
    </>
  );
};

export default SearchBar;
