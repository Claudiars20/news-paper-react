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
    "Después de 17 meses de pandemia, Lima no registra personas fallecidas por COVID-19",
  image:"https://estaticos-cdn.elperiodico.com/clip/d84320a1-f65a-41b7-b42e-cf65afbdeac6_alta-libre-aspect-ratio_default_0.jpg",
  enlace: "",
};

const Politica = [
  {
    title:
      "Anahí Durand sobre renegociar gas de Camisea: “No tengamos miedo de debatir esos temas”  La ministra de la Mujer aseveró que una renegociación de las utilidades del gas de Camisea debe darse en el “marco de la institucionalización debida”",
    image:
      "https://larepublica.pe/resizer/TbRmpET8mXmKn_wcgIIbBBcUPIY=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/RD6H3JQNRRECLOCW4HGBISXRDY.png",
    enlace: "https://t.co/g87LEaxrBJ",
  },
  {
    title:
      "No fue uno, ni dos, ni tres, ni cuatro, sino fueron 15 videos en la cuenta oficial de Twitter. Ministerio de Trabajo usa sus redes sociales para defender a Iber Maraví a pocos horas de la interpelación en el Congreso.",
    image:
      "https://larepublica.pe/resizer/k0H1nexcktt5Vd9_QsB0qa7RmAA=/538x0/top/larepublica.pe/resizer/y4Xfazs_iF1ykp0MOIXKm56f4kk=/538x0/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/SZGR4B7VWZEHJJJPWFDXDUFB7A.png",
    enlace:
      "https://t.co/5kh3SmfKxH",
  },
  {
    title:
      "Perú Libre: tres congresistas marcan asistencia, pese a que una tiene orden de captura y dos recolectan firmas en Huancayo.",
    image: "https://www.expreso.com.pe/wp-content/uploads/2021/09/cONGRESISTA-DE-PERU-LIBRE-1.jpg",
    enlace: "https://t.co/6Yh4n49bdJ",
  },
];

const Deporte = [
  {
    title:"¡ESTADÍSTICAS! Gustavo Dulanto es el jugador con más despejes (18) en la presente edición de la Champions League. Además, no pudieron regatearlo  pues goza de 100% de efectividad. Ganó el 71% de duelos terrestres y recuperó 15 balones.",
    image: "https://elcomercio.pe/resizer/hiV296gJvyy0Y0diIh5ZdLvtfoA=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UA6D2ECZXNB77JF7D34DF4SBZQ.JPG",
    enlace: "https://t.co/8gNR7bXnlP",
  },
  {
    title:
      "LOS VICTORIANOS! ClubALoficial  es elegido como el mejor equipo de la fecha 13. El cuadro dirigido por Carlos Bustos  venció a alianzasullana_ y lidera la tabla de la Fase 2  y del acumulado. ¡Bien jugado!",
    image:"https://pbs.twimg.com/media/E9RzNfwXEAE5Kmm.jpg",
    enlace: "https://t.co/DCGUgbdBG1",
  },
  {
    title:"¿Estamos ante el PEOR Barcelona de los últimos tiempos? 3-0 vs Bayern  3-0 vs Benfica  0 puntos  0 goles a favor  6 goles en contra  1 tiro al arco en 2 partidos de UCL",
    image:"https://pbs.twimg.com/media/FAexv54XIAsAbCc.jpg",
    enlace: "https://t.co/YnFK4WdJ4r",
  },
  
];

const Farandula = [
  {
    title:
      "Juan Víctor se cansó que Andrea San Martín y Sebastián expongan a su hija: “Por su integridad mental”",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOYF5y.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=557&y=279",
    enlace: "https://t.co/KitPmulj0N",
  },
  {
    title:
      "Mariella Zanetti arremete contra Sofía Franco: “Ni un hijo debe ser motivo para continuar una relación",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOXX8Q.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=493&y=201",
    enlace: "https://t.co/ioC4WjnEfO",
  },
];

const Mundial = [
  {
    title:
    "Momento en que la lava cae al mar. La colada de lava del volcán de La Palma, en las islas Canarias, llegó en la noche del martes al océano Atlántico. Por el momento, los gases tóxicos provocados por el contacto con el agua representan un riesgo bajo para la población.",
    image:
    "https://fotografias.lasexta.com/clipping/cmsimages02/2021/09/29/2F2C80DE-F4F1-4384-8E90-E645B6640B39/98.jpg?crop=1250,703,x0,y116&width=1900&height=1069&optimize=low&format=webply",
    enlace: "https://t.co/nLBzOx7OmE",
  },
  {
    title:"Varios ensayos clínicos han mostrado que la combinación de vacunas de covid-19 no sólo es posible, sino que en muchos casos es hasta recomendable y podría ofrecer una mejor protección contra el coronavirus y, particularmente, contra las nuevas variantes.",
    image:"https://ichef.bbci.co.uk/news/640/cpsprodpb/184AB/production/_119899499_1.jpg",
    enlace: "https://t.co/7TMLWosRrV",
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

