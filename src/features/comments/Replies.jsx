import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { fromUnixTime, formatDistanceStrict } from "date-fns";
const Replies = ({ reply }) => {
  const today = Date.now();
  let created;
  if (reply.data.created) {
    created = fromUnixTime(reply.data.created);
  } else if (reply.data.created_utc) {
    created = fromUnixTime(reply.data.created_utc);
  } else {
    created = Date.now();
  }

  let content;
  if (reply.kind === "t1") {
    content = (
      <>
        <div className="flex gap-2 my-1">
          <p>{reply.data.author}</p>
          <div className="flex items-center gap-2 text-light-gray">
            <FontAwesomeIcon icon={faCircle} className="w-1 text-white" />
            <p>{formatDistanceStrict(today, created)} ago</p>
          </div>
        </div>
        <span
          className="inline-block max-w-full break-words link text-pretty text-ellipsis"
          dangerouslySetInnerHTML={{ __html: reply.data.body_html }}
        ></span>
        <hr className="w-3/4 mt-2 text-light-gray/20" />
      </>
    );
  }
  return <>{content}</>;
};

Replies.propTypes = {
  reply: PropTypes.object,
};

export default Replies;
