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
        {posts.map((post) => (
          <>
            <div
              key={post.data.id}
              className="col-start-3 col-end-11 px-8 py-3 mx-2 my-3 cursor-pointer rounded-xl hover:bg-navy"
            >
              <PostSample post={post.data} />
            </div>
            <hr className="col-start-3 col-end-11 my-2 text-gray" />
          </>
        ))}
      </section>
    </>
  );
};

export default SamplePosts;
