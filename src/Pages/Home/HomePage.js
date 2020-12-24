import React from 'react';
import {Box, makeStyles} from '@material-ui/core';

import TopBar from '../../Components/TopBar';
import MenuOptions from '../../Components/MenuOptions';
import TrendingVideos from '../../Components/TrendingVideos';

function HomePage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TopBar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
            <Box display={'flex'}>
                <MenuOptions />
                <TrendingVideos />
            </Box>
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