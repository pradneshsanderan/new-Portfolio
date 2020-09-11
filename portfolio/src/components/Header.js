import React from 'react'
import {Typography, Avatar, Grid, Box} from '@material-ui/core';
import avatar from '../assets/cartoon1.png';

const Header = () => {
    return (
        <Box>
            <Avatar src={avatar} alt="Pradnesh Sanderan"/>
            
        </Box>
    )
}

export default Header
