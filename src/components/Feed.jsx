import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Sidebar, Videos} from './'
import { fetchFromApi } from '../utils/fetchfromApi'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(((data)=>{setVideos(data.items)}));
  },[selectedCategory])


  return (
    <Stack
    sx={{
      flexDirection: { sx: "column" , md: "row"}
    }}
    >
      {/* sidebar added in 1st box */}
      <Box
      sx= {{ height: {sx: 'auto', md: '92vh'}, 
             borderRight: '1px solid #3d3d3d',
             px: {sx: 0, md:2}
          }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography className='copyright'
        variant='body2' 
        sx={{ mt: 1.5 , color: '#fff'}}>
          Copyright 2023 Altech Media
        </Typography>
      </Box>

        <Box p={2} sx={{ height: '90vh', flex: 2  }}>
      {/* feed videos section will add in 2nd box */}
          <Typography variant='h4'fontWeight='bold' sx={{color: '#fff'}}>
            {selectedCategory} <span style={{color:'#FC1503'}}>videos</span>
          </Typography>
          <Videos videos= {videos}/>
        </Box>
    </Stack>
  )
}

export default Feed