import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostSample = ({ post }) => {
  return (
    <>
      <h3>{post.title}</h3>
      <h4>{post.subreddit_name_prefixed}</h4>
      <div className="flex items-center">
        <div className="flex justify-around max-w-28 items-center bg-gray rounded-full my-2">
          <FontAwesomeIcon
            icon={faUpLong}
            className="rounded-full hover:bg-gray p-2 mx-1"
          />
          <p>{post.score}</p>
          <FontAwesomeIcon
            icon={faDownLong}
            className="rounded-full p-2 mx-1"
          />
        </div>
        <div className="mx-4 flex items-center justify-between bg-gray rounded-full">
          <FontAwesomeIcon icon={faMessage} className="px-2 py-1 mx-1" />
          <p className="px-2 py-1">{post.num_comments}</p>
        </div>
      </div>
    </>
  );
};

export default PostSample;
