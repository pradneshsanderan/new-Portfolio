import React from 'react'
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../assets/cartoon1.png';
import Typed from 'react-typed';

const Header = () => {
    return (
        <Box>
            <Avatar src={avatar} alt="Pradnesh Sanderan" />
            <Typography variant="h4">
                <Typed strings={["Pradnesh Sanderan"]} 
                typeSpeed={40} />
            </Typography>
            <br />
            <Typography variant="h4">
                <Typed strings={["Computer Science Major", "The University of Edinburgh"]} 
                typeSpeed={40} 
                 backSpeed={60}
                 loop/>
            </Typography>


        </Box>
    )
}

export default Header
