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
                        <br />
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                           Tutor
                           
                        </Typography>
                        <br />
                        <Typography variant="subtitle" align="center" style={{ color: "tan" }}>
                        Led weekly tutorial groups consisting of first year and second year students for the computational logic part, 
                        for the course, Informatics1-Introduction to Computation, through tutorial sheets provided by the lecturers
                        </Typography>
                    </Box>



                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} >
                           Rumah Hope CHildrens Home
                        </Typography>
                        <br />
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                           Volunteer Teacher
                        </Typography>
                        <br />
                        <Typography variant="subtitle" align="left" style={{ color: "tan", display: 'inline-block' }}>
                        Organized and led weekly 2 hour session with primary school children that 
                        focused on teaching them English and Science through various fun activities and exercises
                        </Typography>

                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2016
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} >
                            SPCA Kajang
                        </Typography>
                        <br />
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Volunteer
                        </Typography>
                        <br />
                        <Typography variant="subtitle" align="left" style={{ color: "tan", display: 'inline-block' }}>
                          Volunteered at an animal shelter where I was in charge of cleaning the kennels of the dogs, bathing the dogs and feeding them
                        </Typography>
                    </Box>

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2013
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} >
                            Soup Kitchen
                        </Typography>
                        <br />
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                           Co-Founder and Volunteer
                        </Typography>
                        <br />
                        <Typography variant="subtitle" align="left" style={{ color: "tan", display: 'inline-block' }}>
                        Co-founded a soup kitchen that distributes packed meals to the homeless around the Kuala Lumpur City Center every month
                        </Typography>
                    </Box>



                </Box>
            </Box>
        </>
    );
}

export default Resume
