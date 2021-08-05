import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    cardMediaWidth: {
        maxWidth: 345,
    },
    cardMediaHeight: {
        height: 140,
    },
    flexGrow: {
        flexGrow: 1,
    },
    paddingBody: {
        paddingTop: "5%",
    }
}));

const Content1 = () => {
    const classes = useStyles();

    return (
        <div className={classes.paddingBody}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card className={classes.cardMediaWidth}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.cardMediaHeight}
                                    image="https://picsum.photos/200/300.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lorem Ipsum
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.cardMediaWidth}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.cardMediaHeight}
                                    image="https://picsum.photos/200/300.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lorem Ipsum
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Link to="/content2">Testfffffffffffffff</Link>
            <Button color="inherit">Login</Button>
        </div>
    );
}

export default Content1;