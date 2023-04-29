import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

interface Props {
  videos: any[];
}

const Videos = (props: Props) => {
  return (
    <Stack
      direction={"row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {props.videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && (
            <ChannelCard channelDetail={item} marginTop="0" />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
