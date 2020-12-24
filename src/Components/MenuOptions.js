import React from 'react';
import { makeStyles, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, ListSubheader, Hidden } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';



function MenuOptions() {
    const classes = useStyles();

    return (
        <Hidden mdDown>        
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >   
                <Toolbar />
                <div>
                    <List>
                        <ListItem
                            button
                            classes={{
                                root: classes.listItem
                            }}
                        >
                            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText
                                }}
                                primary={"Home"}
                            />
                        </ListItem>
                        <ListItem
                            button
                            classes={{
                                root: classes.listItem
                            }}
                        >
                            <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText
                                }}
                                primary={"Trending"}
                            />
                        </ListItem>
                        <ListItem
                            button
                            classes={{
                                root: classes.listItem
                            }}
                        >
                            <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText
                                }}
                                primary={"Subscriptions"}
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem
                            button
                            classes={{
                                root: classes.listItem
                            }}
                        >
                            <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText
                                }}
                                primary={"Home"}
                            />
                        </ListItem>
                        <ListItem
                            button
                            classes={{
                                root: classes.listItem
                            }}
                        >
                            <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText
                                }}
                                primary={"Trending"}
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <Box p={2.5}>
                        <Typography variant='body2'>
                            Sign in to like videos, comment, and subscribe
                        </Typography>
                        <Box mt={2}>
                            <Button
                                variant='outlined'
                                color="secondary"
                                startIcon={<AccountCircleIcon />}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                    <Divider />
                    <ListSubheader className={classes.listSubheader}>
                        Best of youtube
                    </ListSubheader>
                    <ListItem
                        button
                        classes={{
                            root: classes.listItem
                        }}
                    >
                        <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText
                            }}
                            primary={"Music"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        classes={{
                            root: classes.listItem
                        }}
                    >
                        <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText
                            }}
                            primary={"Sports"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        classes={{
                            root: classes.listItem
                        }}
                    >
                        <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText
                            }}
                            primary={"Gaming"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        classes={{
                            root: classes.listItem
                        }}
                    >
                        <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText
                            }}
                            primary={"Movies"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        classes={{
                            root: classes.listItem
                        }}
                    >
                        <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText
                            }}
                            primary={"News"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        classes={{
                            root: classes.listItem
                        }}
                    >
                        <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText
                            }}
                            primary={"Live"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        classes={{
                            root: classes.listItem
                        }}
                    >
                        <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText
                            }}
                            primary={"Spotlight"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        classes={{
                            root: classes.listItem
                        }}
                    >
                        <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText
                            }}
                            primary={"360º Video"}
                        />
                    </ListItem>
                </div>
            </Drawer>
        </Hidden>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1
    },
    grow: {
        flexGrow: 1
    },
    appBarIcons: {
        marginRight: theme.spacing(1.5)
    },
    menuIcon: {
        paddingLeft: theme.spacing(1.5),
        marginRight: theme.spacing(2)
    },
    logo: {
        height: 25
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none'
    },
    listItemText: {
        fontSize: 14
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4
    },
    listSubheader: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 'small'
    }
}));

export default MenuOptions