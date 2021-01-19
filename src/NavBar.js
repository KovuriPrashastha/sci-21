import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  HomeSharp,
  InfoSharp,
  ScheduleSharp,
  SpeakerGroupSharp,
  LibraryBooksSharp,
  GetAppSharp,
  FolderSpecialSharp,
  CalendarTodaySharp,
  PeopleAltSharp,
  PhoneForwardedSharp,
  Menu,
  ChevronLeft,
  ChevronRight,
  ListAltSharp,
  FlightTakeoffSharp,
  BusinessSharp,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const names = [
  'HOME',
  'ABOUT US',
  'SCHEDULES',
  'SPEAKERS',
  'CALL FOR PAPERS',
  'REGISTRATION',
  'DOWNLOAD',
  'SPECIAL SESSIONS',
  'IMPORTANT DATE',
  'COMMITTES',
  'CONTACT US',
  'HOTELS',
  'TRAVEL',
];
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#30b55b',
    },
    secondary: {
      main: '#f44336',
    },
  },
});
const links = [
  '/home',
  '/aboutus',
  '/schedules',
  '/speakers',
  '/callforpapers',
  '/registration',
  '/download',
  '/specialsessions',
  '/importantdates',
  '/committes',
  '/contactus',
  '/hotels',
  '/travel',
];
const icons = [
  <HomeSharp />,
  <InfoSharp />,
  <ScheduleSharp />,
  <SpeakerGroupSharp />,
  <ListAltSharp />,
  <LibraryBooksSharp />,
  <GetAppSharp />,
  <FolderSpecialSharp />,
  <CalendarTodaySharp />,
  <PeopleAltSharp />,
  <PhoneForwardedSharp />,
  <BusinessSharp />,
  <FlightTakeoffSharp />,
];
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    paddingLeft: '500px',
    alignItems: 'right',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Grid container>
              <Grid container sm={1}>
              <Grid item>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Menu />
            </IconButton>
            </Grid>
            </Grid>
            <Grid container alignItems="center" justify="center" sm={1}>
            <Grid item >
            <Typography variant='h6' noWrap>
              SCI 2021
            </Typography>
            </Grid>
            </Grid>
            <Grid container alignItems="center" justify="center" sm={7}>
            <Grid item style={{ textAlign: "center"}} >
            <Typography variant='h6' noWrap>
              {props.title}
            </Typography>
            </Grid>
            </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </div>
          <Divider />
          {names.map((post, index) => (
            <div>
              <Link to={links[index]}>
                <List>
                  <ListItem button key={names[index]}>
                    <ListItemIcon>{icons[index]}</ListItemIcon>
                    <ListItemText primary={names[index]} />
                  </ListItem>
                </List>
                <Divider />
              </Link>
            </div>
          ))}
          {/* <List>
           <ListItem button key={'hello'}>
             <ListItemIcon>
               <InboxIcon />
             </ListItemIcon>
             <ListItemText primary={'hello'} />
           </ListItem>
         </List> */}
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
        </main>
      </div>
    </ThemeProvider>
  );
}
