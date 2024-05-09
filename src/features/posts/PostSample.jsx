import { faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faDownLong,
  faUpLong,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceStrict, fromUnixTime } from "date-fns";
import { Link } from "react-router-dom";

const PostSample = ({ post }) => {
  const today = Date.now();
  const created = fromUnixTime(post.created_utc);

  let mediaContent;
  if (!post.secure_media) {
    mediaContent = <></>;
  } else if (post.secure_media.reddit_video) {
    mediaContent = (
      <>
        <video
          autoPlay
          muted
          controls
          className="max-w-full m-auto max-h-dvh rounded-xl"
        >
          <source
            src={post.secure_media.reddit_video.scrubber_media_url}
            type="video/mp4"
          />
        </video>
      </>
    );
  } else if (post.secure_media.oembed) {
    mediaContent = <>{post.secure_media.oembed.html}</>;
  }
  if (post.preview) {
    mediaContent = (
      <>
        <img
          src={post.preview.images[0].source.url}
          className="max-w-full m-auto rounded-xl"
        />
      </>
    );
  }

  return (
    <>
      <Link to={post.permalink}>
        <div className="flex gap-2 items-center my-1">
          <h3>{post.subreddit_name_prefixed}</h3>
          <div className="flex items-center gap-2 text-light-gray">
            <FontAwesomeIcon icon={faCircle} className="text-white w-1" />
            <p>{formatDistanceStrict(created, today)} ago</p>
          </div>
        </div>
        <h4 className="text-xl font-bold my-2">{post.title}</h4>
        {mediaContent}
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
            <FontAwesomeIcon icon={faMessage} className="pl-2 py-1 ml-1" />
            <p className="px-2 py-1">{post.num_comments}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostSample;
