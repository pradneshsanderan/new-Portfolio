import React from 'react';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from '../assets/cartoon1.png';

const Navbar = () => {
    return (
        <div>
            <Box component="div">
                <Avatar src={avatar} alt="Pradnesh Sanderan"/>

            </Box>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{ color: "tomato" }} />
                            <Typography variant="h5" style={{ color: "tan" }}>
                                PortFolio
                        </Typography>
                        </IconButton>
                    </Toolbar>
                </AppBar>

            </Box>
        </div>
    )
}

export default Navbar
