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
                        Technical skills
                    </h2>
                    <h3>
                        Languages
                    </h3>
                    <ul>
                        Java
                        Python
                        C
                        Haskell
                        HTML/CSS
                    </ul>
                    <h3>Frameworks</h3>
                    <ul>
                        ReactJs
                        React Native
                        Android Studio

                    </ul>
                    <h3>others</h3>
                    <ul>
                        Git
                        
                    </ul>

                    <h2>
                        languages
                    </h2>
                    <ul>
                        English
                        Malay
                        Tamil
                    </ul>
                    <h2>
                        
                    </h2>
                </Box>
            </Box>

        </>
    )
}

export default Skills;
