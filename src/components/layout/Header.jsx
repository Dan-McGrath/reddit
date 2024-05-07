import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <header className="bg-text">
      <FontAwesomeIcon
        icon={faReddit}
        className="text-3xl text-logo bg-white rounded-full m-3"
      />
    </header>
  );
};

export default Header;
