import { Box,CardContent,CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

const ChannelCard = ({id, channelDetail, marginTop}) => {

  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: "10px",
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
      width: { xs: '100%', md: '358px', sm : '300px'  },
      height: '280px',
      margin:'auto',
      marginTop
    }}
    >
      <Link to={id ? `/channel/${id}` : `/channel/error`}>
        <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center",
          textAlign:'center', color:"#fff"
        }}>
          <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url  || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{borderRadius:"50%", height: '180px', width:'180px',  mx:'auto', mb:2 , border:'1px solid #e3e3e3' }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            {/* {`   test  ---  ${channelDetail?.id}`} */}
            <CheckCircle
                sx={{ fontSize:'14px', color:'gray', ml: '5px'  }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography> 
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
