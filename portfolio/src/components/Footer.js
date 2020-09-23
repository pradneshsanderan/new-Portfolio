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
            <a href="https://github.com/pradneshsanderan" rel="noopener noreferer" target="_blank">
                <BottomNavigationAction
                    className={classes.root}
                    style={{ padding: 17 }}
                    icon={<GitHubIcon />} />

            </a>

            <a href="https://www.linkedin.com/in/pradnesh-sanderan-70b24b19a/" rel="noopener noreferer" target="_blank">
                <BottomNavigationAction
                    className={classes.root}
                    style={{ padding: 17 }}
                    icon={<LinkedInIcon />} />
            </a>


            <a href={Resume} class="btn-rounded-white" rel="noopener noreferer" target="_blank">
                <BottomNavigationAction
                    className={classes.root}
                    style={{ padding: 17 }}
                    icon={<DescriptionIcon />} />
            </a>

        </BottomNavigation>
    );
}



export default Footer
