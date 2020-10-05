import React from 'react'
import Navbar from './Navbar';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    }
}));


 const Skills = () => {
    return (
        <>
        <Navbar />
        <Box component="header" className={classes.mainContainer}>

        </Box>
            
        </>
    )
}

export default Skills;
