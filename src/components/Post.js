import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

import { ImageListItem, ImageListItemBar } from "@material-ui/core";

const themes = createTheme({
  typography: {
    fontFamily: 'Bebas Neue', 
  },
});

const useStyles = makeStyles((theme) => ({
  FeaturedPost: {
    position: 'flex',
    backgroundColor: theme.palette.grey[800],
    marginBottom: theme.spacing(2),
    width: "100%",
    height: "350px",
    borderRadius: "2%",
    border: "8px solid black",
    filter: "saturate(20%)",
    "&:hover": {
      transition: "all 0.5s",
      transform: "scale(1.03)",
      transformOrigin: "center center",
      filter: "saturate(90%)",
      backgroundColor: "transparent",
    },
  },

  overlay: {
    height: "335px",
    width: "100%",
    borderRadius: "2%",
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
    fontSize: "30px",
    fontWeight: 500,
    letterSpacing: "-0.5px",
    lineHeight: 1
  }
}));

export default function Posting(props) {
  const classes = useStyles();
  const { posti} = props;

  return (
    <a href={posti.enlace} rel="noreferrer" target="_blank">
      <ThemeProvider theme={themes}>
      <Paper className={classes.FeaturedPost}>
        <Grid container>
          <Tooltip
            title={posti.title.length > 63 ? posti.title : ""}
          >
            <ImageListItem key={posti.image} className={classes.overlay} style={{backgroundImage:'../images/notfound.jpg'}}>
              <img src={posti.image} style={{height: '100%', weight:'100%'}}
              alt={posti.title} loading="lazy" />
              <ImageListItemBar title={posti.title} />
            </ImageListItem>
          </Tooltip>
        </Grid>
    </Paper>
    </ThemeProvider>
    </a>

  );
}

Posting.propTypes = {
  posti: PropTypes.object,
  tam: PropTypes.number,
};