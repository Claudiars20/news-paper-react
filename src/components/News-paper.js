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
    "La foto de la Eliminatoria: ¡TRIUNFAZO HISTÓRICO DE PERÚ EN CARACAS Y NOS METEMOS EN LA PELEA POR EL MUNDIAL, CARAJO! ¡17 PUNTOS Y ESTAMOS CON MÁS VIDA QUE NUNCA!",
  image:"https://pbs.twimg.com/media/FEWY2pIX0AIzcTF.jpg:large",
  enlace: "",
};

const Politica = [
  {
    title:
      "Lanzan aplicación móvil para reportar negación de acceso al AbortoTerapéutico. En el primer día de funcionamiento, la herramienta digital ya recibió una queja contra un centro de salud que negó este derecho a una víctima de violación sexual",
    image:
      "https://wayka.pe/wp-content/uploads/2021/11/APP-ABORTO.png",
    enlace: "",
  },
 {
    title:
      "Personas con dos dosis tendrán descuentos de 10% en galerías de Gamarra   El alcalde de La Victoria, Luis Gutiérrez, alista un plan para que solo vacunados ingresen al emporio.",
    image:
      "https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/12/24/000736512W.jpg",
    enlace: "",
  },
  {
    title:
      "Ley RunRun: Alertan que predictamen de Comisión de Justicia del Congreso debilita lucha contra tráfico de animales silvestres.",
    image:
      "https://wayka.pe/wp-content/uploads/2021/11/LEY-RUN-RUN.png",
    enlace: "",
  },
 
];

const Deporte = [
  {
    title:
      "¡GRAN GESTO! Los jugadores que integran la Selección de Serbia  decidieron donar su premio económico tras haber logrado la clasificación al Mundial de Qatar 2022 . El dinero servirá para apoyar en el tratamiento a niños enfermos en su país.",
    image:
      "https://imgmedia.libero.pe/748x396/libero/original/2021/09/09/613ab5a4c4286262464cc05c.webp",
    enlace: "",
  },
  {
    title:
      "¡Final en La Paz! Derrota durísima de la selección de Uruguay en la altura y Bolivia sigue soñando con Qatar.   Bolivia  3 – 0  Uruguay",
    image:
      "https://www.mundodeportivo.com/files/image_449_220/files/fp/uploads/2021/11/16/6194317c1af86.r_d.995-467-2227.jpeg",
    enlace: "",
  },
   {
    title:
      "Argentina  0-0  Brasil",
    image:
      "https://movistardeportes.pe/wp-content/uploads/sites/2/2021/09/Nuevo-proyecto-9-1.jpg",
    enlace: "",
  },
];

const Farandula = [
  {
    title:
      "Susy Díaz lanzó una dieta en homenaje a Luciana Fuster, tras ser ampayada besándose con Patricio Parodi por las cámaras de Magaly Tv La Firme",
    image:
      "https://wapa.cronosmedia.glr.pe/original/2021/11/16/619411cc3e9f1a11df752366.jpg",
    enlace: "",
  },
  {
    title:
      "Giuliana Rengifo: “Tuve una relación con Alfredo Zambrano de un mes y medio”",
    image:
      "https://www.extra.com.pe/wp-content/uploads/2021/11/Giuliana-Rengifo-Alfredo-Zambrano-.jpg",
    enlace: "",
  },
];

const Mundial = [
  {
    title:
    "El Mencho: detienen en México a Rosalinda González Valencia, esposa del líder del Cartel Jalisco Nueva Generación",
    image:
    "https://cdn.cnn.com/cnnnext/dam/assets/211116170847-arresto-rosalinda-gonzalez-valencia-nemesio-oseguera-cervantes-mencho-cjng-live-belen-zapata-redaccion-mexico-story-tablet.jpg",
    enlace: "",
  },
  {
    title:"Última Hora  Senado de Chile rechaza acusación a Piñera  La oposición no logró conseguir el quórum necesario para destituir al mandatario Sebastián Piñera. La acusación fue rechazada por al menos 14 senadores, de un total de 43. La oposición necesitaba 29 votos favorables.",
    image:"https://pbs.twimg.com/media/FEWr0GUXEAMBC88.jpg",
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

