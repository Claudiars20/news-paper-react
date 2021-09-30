import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  TopMainPost: {
    position: 'relative',
    backgroundImage: 'url()',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    top:'2%',
    height: '72%',
    borderRadius: '2%',
    width:'100%',
    filter: 'saturate(20%)',
    "&:hover":{
      transition: 'all 0.5s',
      transform: 'scale(1.02)',
      transformOrigin: 'center center',
      filter: 'saturate(90%)',
      backgroundColor:'transparent',
  }
    
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: '2%',

  },
  TopPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
    paddingRight: 0,
    fontFamily: 'fontFamily',
    },
  },
  Tittle:{
    fontSize: "70px",
    fontWeight: 500,
    letterSpacing: "-0.5px",
    lineHeight: 1,
    backgroundColor:"rgba(0,0,0,.7)",
  }
}));

export default function TopMain(props) {
  const classes = useStyles();
  const { post } = props;
  return (
      <a href={post.enlace} rel = "noreferrer" target="_blank">
     <Paper className={classes.TopMainPost} style={{ backgroundImage: `url(${post.image})` }}>
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay}/>
      <Grid container>
        <Grid item md={5}>
          <div className={classes.TopPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom className={classes.Tittle}>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
    </a>  
  );
}

TopMain.propTypes = {
  post: TopMain.object,
};