import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loadAllComments,
  selectAllComments,
  isLoading,
} from "../comments/commentSlice";
import Post from "./Post";
import Comment from "../comments/Comment";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadAllComments(id));
  }, [dispatch, id]);

  const detail = useSelector(selectAllComments);
  const isLoadingComments = useSelector(isLoading);

  if (isLoadingComments) {
    return <div>Loading...</div>;
  }

  const { postInfo, comments } = detail;

  return (
    <div className="grid grid-cols-12 mx-auto max-w-7xl">
      <div className="col-start-3 col-end-11">
        <Post post={postInfo} />
      </div>
      <hr className="col-start-3 col-end-11 row-start-2 row-end-3 my-2 text-gray" />
      <div className="col-start-3 col-end-11">
        {comments.map((comment) => (
          <>
            <Comment comment={comment} key={comment.data.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
