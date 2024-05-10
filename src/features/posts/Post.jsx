import { faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faDownLong,
  faUpLong,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceStrict, fromUnixTime } from "date-fns";

const Post = ({ post }) => {
  const today = Date.now();
  const created = fromUnixTime(post.created_utc);
  return (
    <>
      <section>
        <div className="flex items-center gap-2 my-1">
          <h3>{post.subreddit_name_prefixed}</h3>
          <div className="flex items-center gap-2 text-light-gray">
            <FontAwesomeIcon icon={faCircle} className="w-1 text-white" />
            <p>{formatDistanceStrict(created, today)} ago</p>
          </div>
        </div>
        <h4 className="my-2 text-xl font-bold">{post.title}</h4>
      </section>
      <article>{post.selftext}</article>
      <div className="flex items-center">
        <div className="flex items-center justify-around my-2 rounded-full max-w-28 bg-gray">
          <FontAwesomeIcon
            icon={faUpLong}
            className="p-2 mx-1 rounded-full hover:bg-gray"
          />
          <p>{post.score}</p>
          <FontAwesomeIcon
            icon={faDownLong}
            className="p-2 mx-1 rounded-full"
          />
        </div>
        <div className="flex items-center justify-between mx-4 rounded-full bg-gray">
          <FontAwesomeIcon icon={faMessage} className="py-1 pl-2 ml-1" />
          <p className="px-2 py-1">{post.num_comments}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
