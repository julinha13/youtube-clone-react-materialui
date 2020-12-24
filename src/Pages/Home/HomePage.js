import React from 'react';
import {makeStyles} from '@material-ui/core';

import TopBar from '../../Components/TopBar'
import MenuIcon from '../../Components/MenuOptions'

function HomePage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TopBar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />    
            <MenuIcon />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark
    },
}));

export default HomePage;