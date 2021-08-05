import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    spacing: {
        marginRight: theme.spacing(100),
    },
    flexGrow: {
        flexGrow: 1,
    },
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <div>
            {/* <BrowserRouter> */}
                <AppBar position="static">
                    <Toolbar>
                        <Typography>
                            <Button color="inherit">menu1</Button>
                        </Typography>
                        <Typography>
                            <Button color="inherit">menu2</Button>
                        </Typography>
                        <Typography >
                            <Button color="inherit">menu3</Button>
                        </Typography>
                        <Typography className={classes.flexGrow}>
                            <Button color="inherit">menu4</Button>
                        </Typography>
                        <Button color="inherit">Login</Button>

                        <Link to="/signup">Sign up</Link>
                    </Toolbar>
                </AppBar>
        </div>
    );
}

export default Header;