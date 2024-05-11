import { faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faDownLong,
  faUpLong,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceStrict, fromUnixTime } from "date-fns";
import PropTypes from "prop-types";
import { useState } from "react";
import Replies from "./Replies";

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const today = Date.now();
  const replies = comment.data.replies;

  let numReplies;
  if (replies) {
    numReplies = replies.data.children.length;
  }
  let created;
  if (comment.data.created) {
    created = fromUnixTime(comment.data.created);
  } else if (comment.data.created_utc) {
    created = fromUnixTime(comment.data.created_utc);
  } else {
    created = Date.now();
  }

  return (
    <div className="my-3">
      <div className="flex gap-2">
        <p>{comment.data.author}</p>
        <div className="flex items-center gap-2 text-light-gray">
          <FontAwesomeIcon icon={faCircle} className="w-1 text-white" />
          <p>{formatDistanceStrict(today, created)} ago</p>
        </div>
      </div>
      <article
        className="break-words link"
        dangerouslySetInnerHTML={{ __html: comment.data.body_html }}
      ></article>
      <div className="flex items-center">
        <div className="flex items-center justify-around my-2 rounded-full max-w-28 bg-gray">
          <FontAwesomeIcon
            icon={faUpLong}
            className="p-2 mx-1 rounded-full hover:bg-gray"
          />
          <p>{comment.data.score}</p>
          <FontAwesomeIcon
            icon={faDownLong}
            className="p-2 mx-1 rounded-full"
          />
        </div>
        {numReplies > 0 && (
          <>
            <div className="flex items-center justify-between px-1 mx-4 rounded-full bg-gray hover:bg-white hover:text-dark-gray">
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="flex items-center px-2 py-1"
              >
                <FontAwesomeIcon icon={faMessage} className="py-1 pr-2" />
                {numReplies} Replies
              </button>
            </div>
          </>
        )}
      </div>
      {showReplies && (
        <div className="relative left-10 max-w-fit">
          {replies.data.children.map((reply) => (
            <div key={reply.data.id}>
              <Replies reply={reply} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
