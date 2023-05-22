import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {ChannelCard, Videos} from './';
import { Box } from "@mui/material";
import { fetchFromApi } from "../utils/fetchfromApi";

const ChannelDetail = () => {
  const [ChannelDetail,setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(()=>{
    const fetchResults = async () => {

      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet&order=date`);
    
      setChannelDetail(data?.items[0]);
      setVideos(videosData?.items);
    }
    fetchResults();
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
          <ChannelCard id={ChannelDetail?.id} channelDetail={ChannelDetail} marginTop='-110px'/>
      </Box>

      <Box display='flex' p='2'>
        <Box/>
          <Videos direction={'column'} videos= {videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
