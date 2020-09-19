import React from 'react'
import { withStyles } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';

const useStyles= withStyles({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth:0,
            maxWidth:250,
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
                icon={<Facebook />} />

            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Twitter />} />

            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Instagram />} />
        </BottomNavigation>
    );
}



export default Footer
