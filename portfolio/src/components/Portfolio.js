import React from 'react';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';



const Portfolio = () => {
    return (
        <Box component="div">
            <Navbar />
            <Grid container justify="center" alignItems="center">
                {/*Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    something
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Code
                                </Button>
                                <Button size="small" color="primary">
                                  Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Portfolio
