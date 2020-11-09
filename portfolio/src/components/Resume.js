import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';
//code for the resume (education for now)

//CSS for the container, time line and items and text
const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50%)",
                right: "auto"
            }
        }

    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50%)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));


//main jsx for the resume comp

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />

            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} >
                            The University of Edinburgh
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                           Tutor
                        </Typography>
                        <Typography variant="subtitle" align="center" style={{ color: "tan" }}>
                            BSc Computer Science
                        </Typography>
                    </Box>



                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} >
                           Rumah Hope CHildrens Home
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                           Volunteer Teacher
                        </Typography>
                        <Typography variant="subtitle" align="left" style={{ color: "tan", display: 'inline-block' }}>
                            A-Levels
                            <br/>
                            <br/>
                            Subjects Taken: Mathematics, Further Mathematics, Physics, Chemistry
                            <br/>
                            <br/>
                            Results: 4A
                        </Typography>

                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2016
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} >
                            SPCA Kajang
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Volunteer
                        </Typography>
                        <Typography variant="subtitle" align="left" style={{ color: "tan", display: 'inline-block' }}>
                            School Leaving Certificate  (Sijil Peperisaan Malaysia (SPM))
                            <br/>
                            <br/>
                            Subjects Taken: English, Malay Language, Mathematics, Additional 
                            <br />
                            Mathematics, Physics, Chemistry,Biology, Histroy, Moral Studies, Litereature In English
                            <br/>
                            <br/>
                            Results: 7A+ 2A 1B+
                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2013
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} >
                            Soup Kitchen
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                           Co-Founder and Volunteer
                        </Typography>
                        <Typography variant="subtitle" align="left" style={{ color: "tan", display: 'inline-block' }}>
                            School Leaving Certificate  (Sijil Peperisaan Malaysia (SPM))
                            <br/>
                            <br/>
                            Subjects Taken: English, Malay Language, Mathematics, Additional 
                            <br />
                            Mathematics, Physics, Chemistry,Biology, Histroy, Moral Studies, Litereature In English
                            <br/>
                            <br/>
                            Results: 7A+ 2A 1B+
                        </Typography>
                    </Box>



                </Box>
            </Box>
        </>
    );
}

export default Resume
