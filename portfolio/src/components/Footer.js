import React from 'react'
import { makeStyles } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import Resume from './cv.pdf';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fonstSize: "1.8rem"
            }
        }
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{ background: '#222' }}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<GitHubIcon />} />

            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<CodeIcon />} />

            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedInIcon />} />

            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<DescriptionIcon />} />
            <a href={Resume} class="btn-rounded-white" rel="noopener noreferer" target="_blank"></a>

        </BottomNavigation>
    );
}



export default Footer
