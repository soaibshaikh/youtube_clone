import { useState,useEffect } from "react";
import { Stack,Box,Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {Videos} from './index';
import { fetchFromApi } from "../utils/fetchfromApi";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
const VideoDetail = () => {
  const [videosDetails, setVideosDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const {id} = useParams();

  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=> setVideosDetails(data.items[0]))
    fetchFromApi(`search?part=snippet,id&relatedToVideoId=${id}&type=video`).then((data)=> setVideos(data.items))

  },[id]);

  if(!videosDetails?.snippet) return 'Loading';
  console.log("realted videos",videos)
  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount} } = videosDetails;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
          <Box flex={1}>
            <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
              <Typography color='#fff' fontWeight='bold' variant="h5">
                {title}
              </Typography>
              <Stack direction='row' justifyContent='space-between' sx={{ color:'#fff' }} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography  variant={{sm:'subtitle1', md:'h6'}} color="#fff">
                    {channelTitle}
                    <CheckCircle sx={{fontSize: '12px', color: 'gray', ml:'5px'}} />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignContent='center'>
                  <Typography variant="body1" sx={{opacity:'0.7'}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{opacity:'0.7'}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box px={2} py={{xs:5, md: 1}} justifyContent='center' alignItems="center">
            <Videos  videos={videos} direction="column"/>
          </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail