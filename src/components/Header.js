import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloudIcon from '@material-ui/icons/Cloud';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  homeButton: {
    '& svg': {
      fontSize: 35,
    },
    position: 'absolute',
    fontSize: 'large',
    display: 'unset',
    left: 25,
  },
  cloudButton: {
    '& svg': {
      fontSize: 35,
    },
    position: 'absolute',
    fontSize: 'large',
    display: 'unset',
    left: 75,
  },
  backButton: {
    '& svg': {
      fontSize: 35,
    },
    position: 'left',
    fontSize: 'large',
    display: 'inline-block',
  },
  twitter: {
    display: 'inline-block',
    transform: 'scale(1.4)',
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  toolbar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    backgroundColor: '#000',
    height: '75px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    position: 'relative',
    fontSize: 30,
    margin: '20px',
    fontFamily: 'Bebas Neue'
  },
  toolbarTitle: {
    flex: 1,
    fontFamily:"fontFamily",
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  as:{
    color: '#000',
  },
  grid:{
    backgroundColor:'#888',
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


export default function BackToTop(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar className={classes.toolbar}>
        <IconButton href="https://www.google.com/"  edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
            <HomeIcon />
        </IconButton>
        <IconButton href="https://www.google.com/"  edge="start" className={classes.cloudButton} color="inherit" aria-label="menu">
            <CloudIcon />
          </IconButton>
            <TwitterIcon className={classes.twitter}/>
          <Typography variant="h6" className={classes.title}>Twitter News Bot - 10/11/2021</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
      </Container>
      <ScrollTop {...props}>
        <Fab color='secondary' size="small" aria-label="scroll back to top" position='absolute' >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

