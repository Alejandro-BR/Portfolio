import RootLayout from "./layouts/RootLayout";

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects/:slug", element: <ProjectDetail  /> },
    ],
  },
]);

export default router;
