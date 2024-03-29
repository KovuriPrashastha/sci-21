import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Tooltip,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  HomeSharp,
  InfoSharp,
  ScheduleSharp,
  SpeakerGroupSharp,
  LibraryBooksSharp,
  GetAppSharp,
  ChevronLeft,
  ChevronRight,
  FolderSpecialSharp,
  CalendarTodaySharp,
  PeopleAltSharp,
  PhoneForwardedSharp,
  Menu,
  BusinessSharp,
  ListAltSharp,
  FlightTakeoffSharp,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './NavBar.css';

const names = [
  'HOME',
  'ABOUT US',
  'SCHEDULES',
  'SPEAKERS',
  'CALL FOR PAPERS',
  'REGISTRATION',
  'DOWNLOAD',
  'SPECIAL SESSIONS',
  'IMPORTANT DATES',
  'COMMITTEES',
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
  '/committees',
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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <Grid container alignItems='center' justify='center' sm={1}>
            <Grid item>
              <Typography variant='h6' noWrap>
                SCI 2021
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems='center' justify='center' sm={7}>
            <Grid item style={{ textAlign: 'center' }}>
              <Typography variant='h6' noWrap>
                {props.title}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        {names.map((post, index) => (
          <div>
            <Link to={links[index]}>
              <Tooltip title={names[index]} placement='right-end'>
                <List>
                  <ListItem button key={names[index]}>
                    <ListItemIcon>{icons[index]}</ListItemIcon>

                    <ListItemText className='listitem' primary={names[index]} />
                  </ListItem>
                </List>
              </Tooltip>
              <Divider />
            </Link>
          </div>
        ))}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
} /*}
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
*/

/*import React, { useEffect, useState } from 'react';
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
  'IMPORTANT DATES',
  'COMMITTEES',
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
  '/import NavBar from './NavBar';
committees',
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
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

 function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
export default function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  //const { height, width } = useWindowDimensions();
  //const [open, setOpen] = React.useState(width>=992?true:false);
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
              <Grid container alignItems='center' justify='center' sm={1}>
                <Grid item>
                  <Typography variant='h6' noWrap>
                    SCI 2021
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems='center' justify='center' sm={7}>
                <Grid item style={{ textAlign: 'center' }}>
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
         </List> */
