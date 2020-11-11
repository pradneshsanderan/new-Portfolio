import React from 'react'
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../assets/cartoon1.png';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';

//CSS Styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(19),
        height: theme.spacing(19),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato",
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar src={avatar} alt="Pradnesh Sanderan" className={classes.avatar} />
            </Grid>
            <Typography variant="h4" className={classes.title}>
                <Typed strings={["Pradnesh Sanderan"]}
                    typeSpeed={40} />
            </Typography>
            <br />
            <Typography variant="h4" className={classes.subtitle}>
                <Typed strings={["BSc Computer Science", "The University of Edinburgh"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop />
            </Typography>


        </Box>
    )
}

export default Header
