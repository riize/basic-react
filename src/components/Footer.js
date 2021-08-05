import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
  }));

const Footer = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
            {props.ownName}
        </Toolbar>
      </AppBar>
    );
}

export default Footer;