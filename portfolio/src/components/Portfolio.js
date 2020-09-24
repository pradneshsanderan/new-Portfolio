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
                                    An application that  curates the most sustainable recreational activities that tourists can get in their vicinity, considering the weather conditions!
                                    We aim to make this the only app tourists will ever need.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a href="https://github.com/Steven-Chang1114/inSight" rel="noopener noreferer" target="_blank">
                                <Button size="small" color="primary">
                                    Code
                                </Button>
                            </a>
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
                                    A Study Assistant that scans an image for words related to a subject and then searches the web for information and materials related
                                    to that word.The text is then returned and synthesised to audio.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a href="https://github.com/pradneshsanderan/Textbook-Study-Assistant" rel="noopener noreferer" target="_blank">
                                <Button size="small" color="primary">
                                    Code
                                </Button>
                            </a>

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
                                    A Program that is able to solve sudoku puzzles that have been input
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a href="https://github.com/pradneshsanderan/sudoku-solver" rel="noopener noreferer" target="_blank">
                                <Button size="small" color="primary">
                                    Code
                                </Button>
                            </a>

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
                                    porgram that allows you to play the fox and the hound game with another.
                                    (code available upon request)
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
                                    A Web App Built with React that shows users the Statistics for Covid-19 globally and for each country.
                                    The statistics include the total number of deaths, infected people and people recovered.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <a href="https://github.com/pradneshsanderan/Covid-19-tracker" rel="noopener noreferer" target="_blank">
                        <Button size="small" color="primary">
                                Code
                                </Button>
                        </a>
                           
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/*Project 6 */}
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
                                    A Web App bulit with React that allows users to search for a recipe by typing a keyword or ingredient in the search bar.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <a href="https://github.com/pradneshsanderan/React-Recipe-App" rel="noopener noreferer" target="_blank">
                        <Button size="small" color="primary">
                                Code
                                </Button>
                        </a>
                            
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>


                {/*Project 7 */}
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
                                    email administration app
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    a program that creates email addresses for new employees in a company with randomly generated passwords
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a href="https://github.com/pradneshsanderan/email-administration-app" rel="noopener noreferer" target="_blank">
                                <Button size="small" color="primary">
                                    Code
                                </Button>
                            </a>

                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/*Project 8 */}
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
                                    Tic Tac Toe Game
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    program that allows 2 people to play a game of tic tac toe on and it displays who has won or if it is a tie
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a href="https://github.com/pradneshsanderan/Tic-Tac-Toe-game" rel="noopener noreferer" target="_blank">
                                <Button size="small" color="primary">
                                    Code
                                </Button>
                            </a>

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
