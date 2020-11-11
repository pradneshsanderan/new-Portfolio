import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles({
    particlesCanvas: {
        position: "absolute",
        opacity:"0.3",
        overflow: "hidden",
        
        
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div style={{overflow:"hidden"}}>
            <Navbar />
            <Header />
            <Particles
                canvasClassName={classes.particlesCanvas}
                
                params={{
                    particles: {
                        number: {
                            value: 50,
                            // density:{
                            //     enable: true,
                            //     value_area:1500
                            // }
                        },
                        shape:{
                            type:"circle",
                            stroke:{
                                width:1,
                                color:"tomato"
                            }
                        },
                        size:{
                            value:5,
                            random:true,
                            anim:{
                                enable:true,
                                speed:4,
                                size_min:0.1,
                                sync:true,
                            }
                        },
                        opacity:{
                            value:1,
                            random: true,
                            anim:{
                                enable:true,
                                speed:1,
                                opacity_min:0.1,
                                sync:true,
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default Home
