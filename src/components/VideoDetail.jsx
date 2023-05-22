import { useState,useEffect } from "react";
import { Stack,Box,Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
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
  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount} } = videosDetails;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}} marginX={{md:'10px'}}>
          <Box flex={1} sx={{boxShadow: '10px 10px 5px 0px rgba(250,250,250,0.82)', backgroundColor:'#0c0c0c'}}>
            <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
              <Typography marginLeft={1} color='#fff' fontWeight='bold' variant="h5">
                {title}
              </Typography>
              <Stack direction={{xs:'column', md:'row'}} justifyContent='space-between' sx={{ color:'#fff' }} py={{xs:3, md:1}} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography  variant={{sm:'subtitle1', md:'h6'}} color="#fff">
                    {channelTitle}
                    <CheckCircle sx={{fontSize: '12px', color: 'gray', ml:'5px'}} />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' py={{xs:3, md:0}} justifyContent={{xs:'space-between'}} alignContent='center'>
                  <Typography variant="body1" sx={{opacity:'0.7'}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{opacity:'0.7'}}>
                    {parseInt(likeCount).toLocaleString()} <ThumbUpOutlinedIcon  sx={{m:'-3px', ml:'5px'}} />
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box px={2} margin={{xs: 'auto'}} py={{xs:5, md: 1}} justifyContent='center' alignItems="center">
            <Videos  videos={videos} direction="column"/>
          </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail