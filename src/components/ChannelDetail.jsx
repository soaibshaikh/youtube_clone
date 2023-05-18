import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {VideoCard,ChannelCard, Videos} from './';
import { Box } from "@mui/material";
import { fetchFromApi } from "../utils/fetchfromApi";

const ChannelDetail = () => {
  const [ChannelDetail,setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(ChannelDetail,videos);
  useEffect(()=>{
  fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=> setchannelDetail(data?.items[0]));
  fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items));
  },[id]);

  return (
    <Box  minHeight='95vh' >
      <Box>
        <div
        style={{
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex:'10',
          height:'300px'
        }}
        />
          <ChannelCard channelDetail={ChannelDetail} marginTop='-110px'/>
      </Box>

      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '100px'}}}/>
          <Videos videos= {videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail