import { Link } from "react-router-dom"

import { Typography,Card,CardContent,
CardMedia } from "@mui/material"

import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl,demoVideoTitle, demoVideoUrl,
demoChannelTitle, demoChannelUrl } from "../utils/constants"


const VideoCard = ({video : {id: { videoId}, snippet}}) => {

  return (
    <Card
    sx={{ width: { xs: '300px', md: '358px', sm : '320px',  },
    boxShadow:'none',
    borderRadius: 0
    }}> 
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
            <CardMedia
            alt={snippet?.title}  
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
            sx={{
                width: {xs: '300px' , md:'358px', sm:'320px'},
                height: '180px'
            }}
            />
        </Link>

        <CardContent
        sx={{
            backgroundColor: '#1e1e1e',
            height:'85px'
        }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#fff"
                >
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize:12, color:'gray', ml: '5px'  }}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard;