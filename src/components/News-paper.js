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
    fontSize: "450%",
    letterSpacing: "-0.5px",
    lineHeight: 1,
    height: "25%",
    textAlign: "justify",
  },
  sectionTittle:{
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
    paddingBottom: '1%'
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
    "Vacunación completa y prueba molecular negativa no mayor a 72 horas, son los requisitos principales para quienes ingresen al Perú.",
  image:
    "https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/06/24/000784528W.jpg",
  enlace: "https://t.co/HlIkMjjjpJ",
};

const Politica = [
  {
    title:
      "Cobran S/ 15.600 por instalación y viven en la capital  Congresistas de FP, Renovación, Avanza País, APP, Podemos, Somos Perú, PL y JP solicitaron el pago extra por instalación, a pesar de tener residencia en Lima y Callao.",
    image: "https://static.dw.com/image/50684147_303.jpg",
    enlace: "https://t.co/oFOMa7R9TC",
  },
  {
    title:
      "Crematorio se niega a incinerar los restos de Abimael Guzmán, cabecilla terrorista de Sendero Luminoso.",
    image:
      "https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IRKMMNJJFBASXDQMQWFPYDDUTM.jpg",
    enlace: "https://t.co/FLseQyN0Tb",
  },
  {
    title:
      " El volcán de La Palma tiene cinco bocas, la lava avanza hacia el mar y podría afectar a núcleos poblacionales.",
    image:
      " https://static3.abc.es/media/espana/2021/09/19/efe.miguelcalero-U27874245326OQs-620x349@abc.jpeg",
    enlace:
      " https://www.abc.es/espana/canarias/abci-volcan-palma-tiene-cinco-bocas-lava-avanza-hacia-mar-y-podria-afectar-nucleos-poblacionales-202109191833_noticia.html",
  },
];

const Deporte = [
  {
    title:
      "¡TRES PUNTOS! Con un penal atajado por David de Gea , un espectacular tanto de Jesse Lingard  y un soberbio gol de Cristiano Ronaldo , Manchester United  revirtió el marcador y venció 2-1 al West Ham  por la fecha 5 de la Premier League.",
    image:
      "https://images.daznservices.com/di/library/DAZN_News/df/a7/cristiano-ronaldo-david-de-gea-west-ham-manchester-united-premier-league-202122_16fgxlu25cayi176ez4b4hmzjt.jpg?t=36345804&quality=60&h=450",
    enlace: "https://t.co/6S75KvkuGM",
  },
  {
    title:
      "¡EQUIPAZO! Con Lionel Messi  desde el inicio, este es el once con el que el PSG  enfrentará al Lyon  en el choque correspondiente a la sexta jornada de la Ligue 1.",
    image:
      "https://www.semana.com/resizer/fS0aTH3iNPsXWbM3_qCeDiRFe2M=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/XBJKDXFUO5HOFJCPGVVTATICQQ.jpg",
    enlace: "https://t.co/0q8y5rModS",
  },
  {
    title:
      "Ahora ¡GL DE UNIVERSIDAD SAN MARTÍN! Martín Pérez anota de penal para su equipo y pone el primero en el Miguel Grau del Callao. clubshuancayo 0-1 Club_USMP.",
    image: "https://pbs.twimg.com/media/E_qVagYX0AMt3ir.jpg",
    enlace: "https://t.co/6au4i0XQoz",
  },
];

const Farandula = [
  {
    title:
      "Reinas del show Emilia Drago se aleja del programa tras romperse una costilla durante ensayos",
    image:
      " https://imgmedia.wapa.pe/1200x660/wapa/original/2021/09/19/6146f24573f20b62e03c3ff2.jpg",
    enlace: "https://t.co/37wHj0vGq7",
  },
  {
    title:
      "PremiosEmmy: Evan Peters gana el premio a Mejor actor de reparto en serie limitada por MareOfEasttown",
    image:
      "https://lasillarotarm.blob.core.windows.net/images/2021/09/19/emmys2021minutoaminutodelagalaalomejordelatelevision-focus-min0.02-0.7-983-557.jpg",
    enlace: "https://t.co/aOYIoKS2qT",
  },
];

const Mundial = [
  {
    title:
      "Edith Espinal estuvo encerrada durante 40 meses en la Iglesia Menonita de Columbus, en Ohio, para evitar su deportación. Su vida fue plasmada en un documental presentado en el Festival de Cine Latino de NY.",
    image:
      "https://estaticos.efe.com/efecom/recursos2/imagen.aspx?-P-2fL4Jfo8HOMh7E8j2uQLvA5d1QIS-P-2bRrkpQ4TncnkXVSTX-P-2bAoG0sxzXPZPAk5l-P-2fU5UQdufN8Tt-P-2bqmRxj-P-2f2rNCHgg-P-3d-P-3d",
    enlace: "https://t.co/mUCMea5ZXW",
  },
  {
    title:
      "El secretario de Relaciones Exteriores de México, m_ebrard, anunció los acuerdos adoptados en la reunión de jefes Estado y Gobierno en la VI Cumbre de la PPT_CELAC",
    image:
      "https://i2.wp.com/estoeshoy.com/wp-content/uploads/2021/09/mexico-anuncia-los-acuerdos-adquiridos-durante-la-vi-cumbre-de-la-celac-scaled.jpg?fit=2560%2C2560&ssl=1",
    enlace: "https://t.co/NMVotWt67i",
  },
];

export default function News() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid container direction="row" spacing={6}>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.main}>
            {General.title.length > 150
              ? (General.title.substring(0, 150) + "...").toUpperCase()
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
