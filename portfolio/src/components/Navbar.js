import React, { useState } from 'react';
import { AppBar, Toolbar, ListItem, ListItemIcon, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import avatar from '../assets/cartoon1.png';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
//code for the navbar on each component and in the home

//CSS Styles for the container and avatar
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%",
        overflow: "hidden"
        
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
        

    },
    listItem: {
        color: "tan"
    }
}));


//list of route links in the side drawer with icon, text and path
const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "About Me",
        listPath: "/aboutme"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Experience",
        listPath: "/experience"
    },
    {
        listIcon: <Apps />,
        listText: "Projects",
        listPath: "/projects"
    },
    
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/contact"
    },
  
]

//main jsx for the nabar
const Navbar = () => {
    const [right, setRight] = useState(false);
    const toggleSlider = (open) => {
        setRight(open);
    }
    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={() => toggleSlider(false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Pradnesh Sanderan" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText primary={lsItem.listText} className={classes.listItem} />
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
                            <MenuIcon style={{ color: "tomato" }} />
                            <Typography variant="h5" style={{ color: "tan" }}>
                                Pradnesh Sanderan
                        </Typography>
                        </IconButton>
                    </Toolbar>
                    <MobilRightMenuSlider open={right} onClose={() => toggleSlider(false)}>
                        {sideList("right")}
                        <Footer />
                    </MobilRightMenuSlider>
                </AppBar>

            </Box>
        </div>
    )
}

export default Navbar
