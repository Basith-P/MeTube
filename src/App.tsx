import { Box } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Navbar,
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchResults,
  NotFound,
} from "./components";

const router = createBrowserRouter([
  { path: "/", element: <Feed /> },
  { path: "/video/:id", element: <VideoDetails /> },
  { path: "/channel/:id", element: <ChannelDetails /> },
  { path: "/search/:query", element: <SearchResults /> },
  { path: "/:path(.*)", element: <NotFound /> },
]);

const App = () => (
  <Box sx={{ bgcolor: "#000" }}>
    <Navbar />
    <RouterProvider router={router} />
  </Box>
);

export default App;
