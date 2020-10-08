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
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Box>
                    <h1>
                        Experience
                    </h1>
                    <h2>
                        skills
                    </h2>
                    <h2>
                        languages
                    </h2>
                    <h2>
                        
                    </h2>
                </Box>
            </Box>

        </>
    )
}

export default Skills;
