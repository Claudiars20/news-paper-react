import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Posting from "./Post";
import TopMain from "./TopMain";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    flex: 1,
  },

  main: {
    fontSize: "550%",
    letterSpacing: "-1px",
    lineHeight: 1,
    height: "20.0%",
    textAlign: "justify",
    fontFamily: 'Bebas Neue'
  },
  sectionTittle:{
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
    paddingBottom: '1%',
    fontFamily: 'Bebas Neue'
  },
  containers: {
    backgroundColor: "#fff",
    marginTop: "40px",
  },
  politica: {
    borderLeft: "5px solid black",
    position: "flex",
  },
  deporte: {
    borderLeft: "5px solid black",
    position: "flex",
  },
  azul: {
    position: "flex",
  },
  amarillo: {
    borderLeft: "5px solid black",
    position: "flex",
  },
}));

const General = {
  title:
    "Enrique Ghersi y Fernán Altuve: «Renuncie, Presidente»",
  image:"https://www.expreso.com.pe/wp-content/uploads/2021/11/exp_02-1a-luis-borja.jpg",
  enlace: "",
};

const Politica = [
  {
    title:
      "López Aliaga está estudiando una forma legal para revocar a Pedro Castillo de su cargo",
    image:
      "https://www.expreso.com.pe/wp-content/uploads/2021/11/Rafael-Lopez-Aliaga-%C2%A9-DIARIO-EXPRESO-1.jpg",
    enlace: "",
  },
 {
    title:
      "Lucas Ghersi: «Quieren la Asamblea Constituyente porque les da poder absoluto».",
    image:
      "https://www.expreso.com.pe/wp-content/uploads/2021/11/Lucas-Ghersi.jpg",
    enlace: "",
  },
  {
    title:
      "Congreso: Comisión de Ética evalúa hoy investigación contra Bermejo",
    image:
      "https://exitosanoticias.pe/v1/wp-content/uploads/2021/11/Guillermo-Bermejo-Comisi%C3%B3n-de-%C3%89tica-Exitosa.jpg",
    enlace: "",
  },
 
];

const Deporte = [
  {
    title:
      "¡Capitán Dulanto! Nuestro compatriota saldrá al verde ante el Inter de Milan como el guía del FC Sheriff. ¡Con todo, Gustavo!",
    image:
      "https://pbs.twimg.com/media/FDSzbI3XMAclJCc.jpg",
    enlace: "",
  },
  {
    title:
      "¡CUESTIÓN DE HORAS! Xavi Hernández ya habría llegado a un acuerdo con el FC Barcelona , y su fichaje como entrenador podría hacerse oficial mañana según indica Mundo Deportivo. Firmaría por lo que resta de esta temporada y dos más.",
    image:
      "https://www.fcbarcelonanoticias.com/uploads/s1/11/99/07/9/xavihernandez-alsadd18.jpeg",
    enlace: "",
  },
   {
    title:
      "Con el ánimo al máximo, AlianzaLimaFF están listas para el debut en la Copa Libertadores Femenina mañana ante Deportivo Cali.",
    image:
      "https://cdn.futbolperuano.com/sdi/2021/10/22/alianza-lima-ya-tiene-su-fixture-completo-en-la-copa-libertadores-femenina-962749.jpg",
    enlace: "",
  },
];

const Farandula = [
  {
    title:
      "‘Gato Cuba contraataca: exige a Melissa Paredes que pague el 50% de todos los gastos de su hija.",
    image:
      "https://www.atv.pe/wp-content/uploads/2021/11/melissafinal1-700x420.jpg",
    enlace: "",
  },
  {
    title:
      "Rosángela Espinoza en las grandes ligas: ¿Será el nuevo jale de la cadena Telemundo?",
    image:
      "https://imgmedia.libero.pe/748x396/libero/original/2021/11/03/6182ac402ac77557ee5ebc0d.webp",
    enlace: "",
  },
];

const Mundial = [
  {
    title:
    "COP26 Glasgow: La intrépida protesta de dos niños alemanes  Dos niños alemanes denuncian la inacción política ante la crisis climática y hacen rápel en un puente de Glasgow para llamar la atención de los líderes mundiales presentes en la Cumbre del Clima.",
    image:
    "https://cloudfront-us-east-1.images.arcpublishing.com/semana/LZ5ML7SC6ZH2JJC45LIWEWYYYY.jpg",
    enlace: "",
  },
  {
    title:"El republicano Glenn Youngkin vence al demócrata Terry McAuliffe en las elecciones para gobernador en Virginia. Candidatos a la gobernación de Nueva Jersey están casi empatados.",
    image:"https://www.democracynow.org/images/headlines/04/60204/quarter_hd/H1-youngkin.jpg",
    enlace: "",
  },
];

export default function News() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid container direction="row" spacing={6}>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.main}>
            {General.title.length > 93
              ? (General.title.substring(0, 93) + "...").toUpperCase()
              : General.title.toUpperCase()}
          </Typography>
          <TopMain post={General}></TopMain>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.politica}>
          <Typography variant="h4" align="center" className={classes.sectionTittle}>
            Política
          </Typography>
          {Politica.map((post) => (
            <Posting posti={post} />
          ))}
        </Grid>
        <Grid item xs={12} sm={3} className={classes.deporte}>
          <Typography variant="h4" align="center" className={classes.sectionTittle}>
            Deporte
          </Typography>
          {Deporte.map((post) => (
            <Posting posti={post} />
          ))}
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={6}>
        
        <Grid item xs={12} sm={6} className={classes.azul}>
        <Typography variant="h4" align="center" className={classes.sectionTittle}>
            Mundial
          </Typography>
          {Mundial.map((post) => (
            <Posting posti={post} />
          ))}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.amarillo}>
        <Typography variant="h4" align="center" className={classes.sectionTittle}>
            Farándula
          </Typography>
          {Farandula.map((post) => (
            <Posting posti={post} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

