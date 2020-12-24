import React from 'react'
import { makeStyles, Box, Toolbar, Typography, Grid } from '@material-ui/core';


function TrendingVideos() {

    const classes = useStyles();

    const videos = [
        {
            title: "THIS IS MY YOUTUBE UI CLONE #1",
            channel: "Júlia Amorim",
            viewsNumber: '1M Views',
            postDate: 'one week ago',
            thumb: '/images/react_thumb.png'
        },
        {
            title: "LEARN REACTJS #2",
            channel: "Júlia Amorim",
            viewsNumber: '5M Views',
            postDate: 'a day ago',
            thumb: '/images/react_thumb.png'
        },
        {
            title: "LEARN REACT + MATERIALUI #3",
            channel: "Júlia Amorim",
            viewsNumber: '50M Views',
            postDate: 'one week ago',
            thumb: '/images/react_thumb.png'
        },
        {
            title: "THIS IS MY YOUTUBE UI CLONE #4",
            channel: "Júlia Amorim",
            viewsNumber: '15M Views',
            postDate: 'two weeks ago',
            thumb: '/images/react_thumb.png'
        },
        {
            title: "WHY DO I LOVE PROGRAMMING? #5",
            channel: "Júlia Amorim",
            viewsNumber: '7M Views',
            postDate: 'one week ago',
            thumb: '/images/react_thumb.png'
        },
        {
            title: "THIS IS MY YOUTUBE UI CLONE #6",
            channel: "Júlia Amorim",
            viewsNumber: '25M Views',
            postDate: 'a month ago',
            thumb: '/images/react_thumb.png'
        },
        {
            title: "THIS IS MY YOUTUBE UI CLONE #7",
            channel: "Júlia Amorim",
            viewsNumber: '5M Views',
            postDate: 'a year ago',
            thumb: '/images/react_thumb.png'
        },
        {
            title: "THIS IS MY YOUTUBE UI CLONE #8",
            channel: "Júlia Amorim",
            viewsNumber: '45M Views',
            postDate: 'one week ago',
            thumb: '/images/react_thumb.png'
        }
    ]

    return (
        <Box p={8}>
            <Toolbar />
            <Typography
                variant='h5'
                color='textPrimary'
                className={classes.trendingTitle}
            >
                Trending
            </Typography>

            <Grid container spacing={4}>
                {
                    videos.map((item) => {
                        return(
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box>
                                    <img
                                        style={{ width: '100% '}}
                                        alt={item.title}
                                        src={item.thumb}
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        style={{ fontWeight: 600 }}
                                        gutterBottom
                                        variant='body1'
                                        color='textPrimary'
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        display='block'
                                        variant='body2'
                                        color='textSecondary'
                                    >
                                        {item.channel}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                    >
                                        {`${item.viewsNumber} - ${item.postDate}`}
                                    </Typography>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    trendingTitle: {
        fontWeight: 600, 
        paddingBottom: theme.spacing(3.5)
    }
}));

export default TrendingVideos