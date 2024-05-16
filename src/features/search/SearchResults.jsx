import { Link } from "react-router-dom";
import { setSearchTerm } from "./searchSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const SearchResults = ({ result }) => {
  const dispatch = useDispatch();
  let mediaContent;
  if (result.data.preview) {
    mediaContent = (
      <>
        <img
          src={result.data.preview.images[0].source.url}
          className="max-w-24 max-h-24"
          width={result.data.preview.images[0].source.width}
          height={result.data.preview.images[0].source.height}
        />
      </>
    );
  } else {
    mediaContent = <></>;
  }

  return (
    <>
      <Link to={result.data.permalink}>
        <div
          onClick={() => dispatch(setSearchTerm(""))}
          className="flex items-center justify-between gap-4 p-1 rounded-lg hover:bg-dark-gray"
        >
          <div className="flex flex-col">
            <h4 className="text-lg">{result.data.title}</h4>
            <p className="text-sm font-thin">
              {result.data.subreddit_name_prefixed}
            </p>
          </div>
          {mediaContent}
        </div>
      </Link>
    </>
  );
};

SearchResults.propTypes = {
  result: PropTypes.object,
};

export default SearchResults;
