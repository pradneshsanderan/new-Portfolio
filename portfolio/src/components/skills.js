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
                    <ol>
                        Java
                        Python
                        C
                        Haskell
                        HTML/CSS
                    </ol>
                    <h3>Frameworks</h3>
                    <ol>
                        ReactJs
                        React Native
                        Android Studio
                        
                    </ol>
                    <h2>
                        languages
                    </h2>
                    <ol>
                        English
                        Malay
                        Tamil
                    </ol>
                    <h2>
                        
                    </h2>
                </Box>
            </Box>

        </>
    )
}

export default Skills;
