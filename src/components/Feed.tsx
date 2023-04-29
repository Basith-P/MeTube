import { Stack, Box, Typography } from "@mui/material";

import { Sidebar, Videos } from ".";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useState, useEffect } from "react";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New" as string);
  const [videos, setVideos] = useState([] as any[]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data: any) => setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography variant="body2" mt={1.5} textAlign="center">
          Copyright 2023 MeTube
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "scroll", width: "100%" }}>
        <Typography variant="h4" fontWeight="bold" mb={2} mt={1.5}>
          {selectedCategory}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
