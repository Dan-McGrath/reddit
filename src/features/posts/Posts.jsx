import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllPosts, selectAllPosts, isLoading } from "./postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const isLoadingPosts = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadAllPosts());
  }, [dispatch]);

  if (isLoadingPosts) {
    return <div>Loading....</div>;
  }

  return <div>{posts}</div>;
};

export default Posts;
