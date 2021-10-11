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
    "Después de 17 meses de pandemia, Lima no registra personas fallecidas por COVID-19",
  image:"https://estaticos-cdn.elperiodico.com/clip/d84320a1-f65a-41b7-b42e-cf65afbdeac6_alta-libre-aspect-ratio_default_0.jpg",
  enlace: "https://t.co/i9kSsIGmAm",
};

const Politica = [
  {
    title:
      "Encuesta Ipsos: El 61% considera que el presidente Pedro Castillo no tiene liderazgo. Además, el 83% indica que Vladimir Cerrón debe alejarse del Gobierno. En Lima esta cifra crece al 90%.",
    image: "https://image.isu.pub/210930081118-aefc7d61f2d37111f84ab0de9f879d92/jpg/page_1.jpg",
    enlace: "https://t.co/6Yh4n49bdJ",
  },
  {
    title:
      "Aníbal Torres sobre extradición de Alejandro Toledo: “Recibimos con satisfacción el fallo que respalda la posición del Estado peruano”",
    image:
      "https://larepublica.pe/resizer/vDL14jFzIqoCkvSNIkz_i6uZvAY=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/E6FVBY3UYFBU3FHDBZJWBQCHUA.jpg",
    enlace: "https://t.co/9ElcCz58CV",
  },
  {
    title:
      "No fue uno, ni dos, ni tres, ni cuatro, sino fueron 15 videos en la cuenta oficial de Twitter. Ministerio de Trabajo usa sus redes sociales para defender a Iber Maraví a pocos horas de la interpelación en el Congreso.",
    image:
      "https://e.rpp-noticias.io/xlarge/2021/09/29/125312_1150920.jpg",
    enlace:
      "https://t.co/5kh3SmfKxH",
  },
];

const Deporte = [
  {
    title:
      "¡LOS VICTORIANOS! ClubALoficial  es elegido como el mejor equipo de la fecha 13. El cuadro dirigido por Carlos Bustos  venció a alianzasullana_ y lidera la tabla de la Fase 2  y del acumulado. ¡Bien jugado!",
    image:"https://pbs.twimg.com/media/E9RzNfwXEAE5Kmm.jpg",
    enlace: "https://t.co/8gNR7bXnlP",
  },
  {
    title:"¡Cristiano Ronaldo, una leyenda en la Champions League!",
    image:"https://media.gettyimages.com/photos/cristiano-ronaldo-of-manchester-united-poses-with-the-trophy-his-picture-id81190931",
    enlace: "https://t.co/YnFK4WdJ4r",
  },
  {
    title:"¡LA META! Tras la victoria ante el Real Madrid, Gustavo Dulanto, defensa del Sheriff Tiraspol, deja en claro que el objetivo del plantel es acceder a los octavos de final de la Champions League.",
    image: "http://www.huaral.pe/wp-content/uploads/2021/09/gustavo-dulanto-el-lider-peruano-del-sheriff-que-hace-historia-y-suena-en-grande.jpg",
    enlace: "https://t.co/FwK4BIB6i7",
  },
];

const Farandula = [
  {
    title:
      "Mariella Zanetti arremete contra Sofía Franco: “Ni un hijo debe ser motivo para continuar una relación",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOXX8Q.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=493&y=201",
    enlace: "https://t.co/OPI5mBwZK6",
  },
  {
    title:
      "Juan Víctor se cansó que Andrea San Martín y Sebastián expongan a su hija: “Por su integridad mental”",
    image:
      "https://larepublica.pe/resizer/hstSH3hcRKLCw2gHGkBkevhvoYo=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/46FR235GSVBY5A4EPA7KH7UHFU.png",
    enlace: "https://t.co/KitPmulj0N",
  },
];

const Mundial = [
  {
    title:"La necesitamos. La abuela de MiyaMarcano, la joven que desapareció en Florida, dice que la familia tiene mucha fe de que la van a encontrar. Es duro para nosotros, agregó Violeta Delville.",
    image:"https://as01.epimg.net/colombia/imagenes/2021/10/03/actualidad/1633295155_691969_1633295474_noticia_normal_recorte1.jpg",
    enlace: "https://t.co/TygZPDpY6U",
  },
  {
    title:
    "Momento en que la lava cae al mar. La colada de lava del volcán de La Palma, en las islas Canarias, llegó en la noche del martes al océano Atlántico. Por el momento, los gases tóxicos provocados por el contacto con el agua representan un riesgo bajo para la población.",
    image:
    "https://images.clarin.com/2021/09/29/una-nuebe-blanca-ascieden-desde___nGHXmWeNq_720x0__1.jpg",
    enlace: "https://t.co/nLBzOx7OmE",
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
