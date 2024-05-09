import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import Layout from "../components/layout/Layout";
import PostDetail from "../features/posts/PostDetail";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/r/:subreddit/comments/:id/:title"
        element={<PostDetail />}
      />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
