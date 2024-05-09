import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../features/search/SearchBar";

const Header = () => {
  return (
    <header className="bg-gray grid grid-cols-12 gap-3 items-center justify-items-center">
      <FontAwesomeIcon
        icon={faReddit}
        className="text-4xl text-logo bg-white rounded-full m-3 col-end-2"
      />
      <div className="col-start-3 col-end-11 flex min-w-full m-auto justify-center">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
