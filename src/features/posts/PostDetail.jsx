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
    <>
      <Post post={postInfo} />
      <div>
        {comments.map((comment) => (
          <>
            <Comment comment={comment} key={comment.data.id} />
          </>
        ))}
      </div>
    </>
  );
};

export default PostDetail;
