import { Stack,Box } from "@mui/material";
import {ChannelCard, VideoCard} from "./";
const Videos = ({videos, direction}) => {
  if(!videos?.length) return 'Loading...'

  return (
    <Stack
    direction={direction || 'row'}
    flexWrap='wrap'
    // justifyContent="space-between"
    justifyContent='center'
    gap={2}
    >
      {videos.map((item,idx)=> (
        <Box key={idx} >
          { item.id.videoId && <VideoCard video = {item}/>}
          { item.id.channelId && <ChannelCard id = {item.id.channelId} channelDetail = {item}/>}
        </Box>
      ))}

    </Stack>
    )
}

export default Videos