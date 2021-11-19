import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News-paper'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  name:{
    marginTop: theme.spacing(5),
    textAlign: 'center',
  },
  as:
  {
    position: 'relative',
    margin: '#fff',
  },
  mainGrid: {
    flex : 1,
  },
  main:{
    backgroundColor: '#000',
  },
  containers:{
    /* backgroundImage: 'url(https://png.pngtree.com/background/20210714/original/pngtree-old-newspaper-vector-picture-image_1191857.jpg)', */
    backgroundImage: 'url(https://besthqwallpapers.com/Uploads/5-5-2020/131988/thumb2-crumpled-paper-texture-white-crumpled-paper-background-paper-texture-white-paper-crumpled-paper.jpg)',
    marginTop: '40px',
  },
}));


export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.main}>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.containers}>
        <Header title="Twitter's News Bot - 18/11/2021"/>
      <News></News>
      <div className={classes.name}>
      <Divider />
      </div>
      
      </Container>
      <Footer title="Universidad Nacional de San Antonio Abad de Cusco" description="Escuela Profesional de Ing. Informática y de Sistemas" />
    </React.Fragment>
  );
}
