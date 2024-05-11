import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../features/search/SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="grid items-center grid-cols-12 py-1 md:gap-3 bg-gray justify-items-center">
      <Link to="/">
        <FontAwesomeIcon
          icon={faReddit}
          className="col-end-2 m-3 text-3xl bg-white border-2 rounded-full md:text-4xl lg:text-5xl border-logo text-logo"
        />
      </Link>
      <div className="flex justify-center col-start-3 col-end-11 m-auto md:max-w-40 max-w-96 lg:max-w-fit">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
