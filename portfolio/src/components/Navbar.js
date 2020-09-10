import React from 'react';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from '../assets/cartoon1.png';
import { makeStyles } from '@material-ui/core/styles';


//CSS Styles
const useStyles = makeStyles ({
    menuSliderContainer :{
        width:250,
        background:"#511".
        height: "30rem"
    }
})



const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.menuSliderContainer} component="div">
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
