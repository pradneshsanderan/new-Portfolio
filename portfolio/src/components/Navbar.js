import React, { useState } from 'react';
import { AppBar, Toolbar, ListItem, ListItemIcon, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from '../assets/cartoon1.png';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';


//CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%",
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),

    },
    listItem :{
        color:"tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Projects"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact"
    },
]


const Navbar = () => {
    const [right, setRight] = useState(false);
    const toggleSlider = (open) => {
        setRight(open);
    }
    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick= {() => toggleSlider(false)}>
        <Avatar className={classes.avatar} src={avatar} alt="Pradnesh Sanderan" />
        <Divider />
        <List>
            {menuItems.map((lsItem, key) => (
                <ListItem button key={key}>
                    <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                    <ListItemText primary={lsItem.listText} className={classes.listItem}/>
                </ListItem>
            ))}

        </List>
    </Box>
    )
    return (
        <div>
           
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={() => toggleSlider(true)}>
                            <ArrowBack style={{ color: "tomato" }} />
                            <Typography variant="h5" style={{ color: "tan" }}>
                                Pradnesh Sanderan
                        </Typography>
                        </IconButton>
                    </Toolbar>
                    <MobilRightMenuSlider open={right} onClose={() => toggleSlider(false)}>
                        {sideList("right")}
                    </MobilRightMenuSlider>
                </AppBar>

            </Box>
        </div>
    )
}

export default Navbar
