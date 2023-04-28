import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from ".";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
        }}
      >
        <Sidebar />
        <Typography variant="body2" mt={1.5} textAlign="center">
          Copyright 2023 MeTube
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "scroll", width: "100%" }}>
        <Typography variant="h4" fontWeight="bold" mb={2} mt={1.5}>
          New<span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;
