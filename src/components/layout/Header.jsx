import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../features/search/SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="grid items-center grid-cols-12 gap-3 py-1 bg-gray justify-items-center">
      <Link to="/">
        <FontAwesomeIcon
          icon={faReddit}
          className="col-end-2 m-3 text-5xl bg-white border-2 rounded-full border-logo text-logo"
        />
      </Link>
      <div className="flex justify-center min-w-full col-start-3 col-end-11 m-auto">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
