import { faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faDownLong,
  faUpLong,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceStrict, fromUnixTime } from "date-fns";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostSample = ({ post }) => {
  const today = Date.now();
  const created = fromUnixTime(post.created_utc);

  let mediaContent;
  if (post.secure_media) {
    if (post.secure_media.reddit_video) {
      mediaContent = (
        <>
          <video
            autoPlay
            muted
            controls
            className="max-w-full m-auto max-h-28 rounded-xl md:max-h-60 lg:max-h-96 xl:max-h-100"
            height={post.secure_media.reddit_video.height}
            width={post.secure_media.reddit_video.width}
          >
            <source
              src={post.secure_media.reddit_video.fallback_url}
              type="video/mp4"
            />
          </video>
        </>
      );
    } else if (post.secure_media.oembed) {
      mediaContent = <>{post.secure_media.oembed.html}</>;
    }
  } else if (!post.secure_media) {
    if (post.preview) {
      mediaContent = (
        <>
          <div className="bg-black rounded-xl">
            <img
              src={post.preview.images[0].source.url}
              className="m-auto max-w-30 rounded-xl max-h-96 md:max-w-96 md:max-h-100 sm:max-w-48 sm:max-h-40 lg:max-w-96"
              height={post.preview.images[0].source.height}
              width={post.preview.images[0].source.width}
            />
          </div>
        </>
      );
    }
  } else {
    mediaContent = <></>;
  }

  return (
    <>
      <Link to={post.permalink}>
        <div className="flex flex-wrap items-center max-w-full gap-2 mx-auto my-1 sm:text-xs md:text-sm">
          <h3 className="text-white/70">{post.subreddit_name_prefixed}</h3>
          <div className="flex items-center gap-2 text-white/70">
            <FontAwesomeIcon icon={faCircle} className="w-1 text-white" />
            <p className="text-sm md:text-base">
              {formatDistanceStrict(created, today)} ago
            </p>
          </div>
        </div>
        <h4 className="my-2 text-base font-bold md:text-lg lg:text-xl">
          {post.title}
        </h4>
        <div className="bg-black rounded-xl">{mediaContent}</div>
        <div className="flex items-center justify-center mt-2 sm:text-sm md:text-sm">
          <div className="flex items-center justify-around my-2 rounded-full max-w-28 bg-gray">
            <FontAwesomeIcon
              icon={faUpLong}
              className="p-2 mx-1 rounded-full hover:bg-gray"
            />
            <p className="text-sm sm:text-xs">{post.score}</p>
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
      </Link>
    </>
  );
};

PostSample.propTypes = {
  post: PropTypes.object,
};

export default PostSample;
