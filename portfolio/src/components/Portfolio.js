import React from 'react';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import project1 from '../js.jpg';
import project2 from '../rc.jpg';

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto",
    }
})

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center" >
                {/*Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1} />

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    inSight
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    something
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Code
                                </Button>
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/*Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2} />

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    TextBook Study assistant
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    something
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Code
                                </Button>
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/*Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project2} />

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                   Sudoku Solver
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    something
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Code
                                </Button>
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/*Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2} />

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Fox and the Hound Game
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    something
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Code
                                </Button>
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/*Project 5 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2} />

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Covid-19 tracker
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    something
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Code
                                </Button>
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/*Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2} />

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Recipe Finder
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    something
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Code
                                </Button>
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Portfolio
