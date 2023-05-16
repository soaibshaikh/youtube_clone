import { Stack } from '@mui/material'
import React from 'react'

import {categories} from '../utils/constants'
const selectedCategory = 'New';

const Sidebar = () => {
  return (
    <Stack
    flexDirection="row"
    sx = {{ 
        overflowY:"auto",
        height: {sx: 'auto', md: '95%' , color:'#fff'},
        flexDirection:{ md: 'column' },
     }}
    >
        {categories.map((category)=> (
            <button
            className='category-btn'
            style={{
                background: category.name === selectedCategory && '#FC1503',
                color: '#fff'
            }}
            key= {category.name}
            >
                <span
                style= {{
                    color: category.name === selectedCategory ? 'white' : 'red'
                }} 
                >{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}

    </Stack>
  )
}

export default Sidebar;