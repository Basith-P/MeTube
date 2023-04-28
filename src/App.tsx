import { Box } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchResults,
  NotFound,
} from "./components";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Feed /> },
        { path: "/video/:id", element: <VideoDetails /> },
        { path: "/channel/:id", element: <ChannelDetails /> },
        { path: "/search/:query", element: <SearchResults /> },
        { path: "/:path(.*)", element: <NotFound /> },
      ],
    },
  ],
  { basename: "/MeTube" }
);

const App = () => (
  <Box sx={{ bgcolor: "#000" }}>
    <RouterProvider router={router} />
  </Box>
);

export default App;
