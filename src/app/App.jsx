import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import Layout from "../components/layout/Layout";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
