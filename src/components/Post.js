import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';


const themes = createTheme({
  typography: {
    fontFamily: 'Bebas Neue', 
  },
});

const useStyles = makeStyles((theme) => ({
  FeaturedPost: {
    position: 'flex',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '350px',
    borderRadius: '2%',
    filter: 'saturate(20%)',
    "&:hover":{
      transition: 'all 0.5s',
      transform: 'scale(1.03)',
      transformOrigin: 'center center',
      filter: 'saturate(90%)',
      backgroundColor:'transparent',
  }
  },

  overlay: {
    height : '350px',
    width: '100%',
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.0)',
    borderRadius: '2%',
    "&:hover":{
      transition: 'all 0.5s',
      color: 'white',
      backgroundColor:'transparent',
    },
  },
  FeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingRight: 0,
      },
  },
  text:{
    backgroundColor: "rgba(0,0,0,.7)",
    fontSize: "30px",
    fontWeight: 500,
    letterSpacing: "-0.5px",
    lineHeight: 1
  }
}));

export default function Posting(props) {
  const classes = useStyles();
  const { posti, tam } = props;

  return (
    <a href={posti.enlace} rel = "noreferrer" target="_blank">
    <Paper className={classes.FeaturedPost} style={{ backgroundImage: `url(${posti.image})`,
    height: `${tam}px`}} >
      {<img style={{ display: 'none' }} src={posti.image} alt={posti.imageText} />}
      
      <Grid container >
      <div className={classes.overlay} >
        <Grid item md={9}>
        <Tooltip title={posti.title.length > 150 ? posti.title:''} className='etiqueta'>
          <div className={classes.FeaturedPostContent}>
            <ThemeProvider theme={themes}>
              
              <Typography  component="h2" display="inline" variant="h6" color="inherit" gutterBottom className={classes.text}>
              {posti.title.length > 150 ? posti.title.substring (0,150) + '...' : posti.title}
              </Typography>
            </ThemeProvider>
          </div>
              </Tooltip>
        </Grid>
        </div>
      </Grid>
    </Paper>
    </a>

  );
}

Posting.propTypes = {
  posti: PropTypes.object,
  tam: PropTypes.number,
};