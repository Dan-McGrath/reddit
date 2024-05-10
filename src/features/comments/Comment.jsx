import { faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faDownLong,
  faUpLong,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceStrict, fromUnixTime } from "date-fns";

const Comment = ({ comment }) => {
  const today = Date.now();

  let created;
  if (comment.data.created) {
    created = fromUnixTime(comment.data.created);
  } else if (comment.data.created_utc) {
    created = fromUnixTime(comment.data.created_utc);
  } else {
    created = Date.now();
  }
  return (
    <div className="">
      <div>
        <p>{comment.data.author}</p>
        <div className="flex items-center gap-2 text-light-gray">
          <FontAwesomeIcon icon={faCircle} className="w-1 text-white" />
          <p>{formatDistanceStrict(today, created)} ago</p>
        </div>
      </div>
      <p>{comment.data.body}</p>
    </div>
  );
};

export default Comment;
