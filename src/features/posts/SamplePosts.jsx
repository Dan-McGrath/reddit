import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllPosts, selectAllPosts, isLoading } from "./postSlice";
import PostSample from "./PostSample";

const SamplePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const isLoadingPosts = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadAllPosts());
  }, [dispatch]);

  if (isLoadingPosts) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <section className="grid grid-cols-12">
        <h2>Popular</h2>
        {posts.map((post) => (
          <div
            key={post.data.id}
            className="rounded border my-3 p-2 mx-2 hover:bg-navy cursor-pointer col-start-3 col-end-11"
          >
            <PostSample post={post.data} />
          </div>
        ))}
      </section>
    </>
  );
};

export default SamplePosts;
