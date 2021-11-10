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
    "Primeras imágenes del zorro Run Run luego de ser trasladado al Parque de las Leyendas.",
  image:"https://www.expreso.com.pe/wp-content/uploads/2021/11/zorro-Run-Run.jpg",
  enlace: "",
};

const Politica = [
  {
    title:
      "José Vizcarra reveló que el mismo presidente le pidió interceder en los ascensos del Ejército.",
    image:
      "https://www.expreso.com.pe/wp-content/uploads/2021/11/Jose-Vizcarra-1.jpg",
    enlace: "",
  },
 {
    title:
      "La declaración de Roberto Chiabra, congresista de Alianza para el Progreso (APP) sobre que el Perú es el único país en la región que no ha vuelto a las clases presenciales” es falsa.",
    image:
      "https://www.expreso.com.pe/wp-content/uploads/2021/08/Roberto-Chiabra-DIARIO-EXPRESO.jpg",
    enlace: "",
  },
  {
    title:
      "La represión policial causó la muerte de IntiSotelo y BryanPintado, además de decenas de heridos que hasta hoy no logran justicia. En su memoria, colectivos ciudadanos convocan para exigir justicia y detener la impunidad.",
    image:
      "https://exitosanoticias.pe/v1/wp-content/uploads/2021/11/Guillermo-Bermejo-Comisi%C3%B3n-de-%C3%89tica-Exitosa.jpg",
    enlace: "https://medialab.unmsm.edu.pe/chiqaqnews/wp-content/uploads/2021/01/LHDR3TM3OJD2FETQKYKZQEZ3SE.jpg",
  },
 
];

const Deporte = [
  {
    title:
      "Si se repite lo sucedido en el partido contra Chile, la selección peruana corre el riesgo de jugar sin público en el Estadio Nacional. Si ves o escuchas insultos o cánticos discriminatorios contra el equipo rival, impídelo.",
    image:
      "https://imgmedia.libero.pe/748x396/libero/original/2021/09/09/613ab5a4c4286262464cc05c.webp",
    enlace: "",
  },
  {
    title:
      "¡PIDE CAMBIO!  Rio Ferdinand , exfutbolista del Manchester United  sobre el entrenador  Ole Gunnar Solskjaer : No hay filosofía ni identidad en el estilo de juego, que debería ser tarea del técnico. Podría ser el momento para dar un paso al costado. ",
    image:
      "https://cdn.images.express.co.uk/img/dynamic/67/590x/480643405-470445.jpg",
    enlace: "",
  },
   {
    title:
      "¡RENOVACIÓN! De esta forma, Hernán Novick  anunció la extensión de su contrato con Universitario  hasta el año 2023. El uruguayo fue el mejor fichaje crema esta temporada y buscará ser campeón de la LIGA1BETSSONXGOLPERU 2022",
    image:
      "https://universitario.pe/media/images/post/foto01_nota_NOVICK.jpg",
    enlace: "",
  },
];

const Farandula = [
  {
    title:
      "Magaly Medina: Deyvis Orosco y Cassandra la eligen como madrina de su primer bebé.",
    image:
      "https://imgmedia.wapa.pe/1200x660/wapa/migration/imagen/2019/01/12/noticia-1547311015-magaly-medina-deyvis-orosco-cassandra-sanchez.png",
    enlace: "",
  },
  {
    title:
      "Padre del ‘Gato Cuba destruye a Melissa Paredes tras conciliación: “La única culpable es ella por infidelidad”",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAQvWvl.img?h=328&w=624&m=6&q=60&o=f&l=f&x=477&y=213",
    enlace: "",
  },
];

const Mundial = [
  {
    title:
    "Diputados de Chile aprueban acusación constitucional contra Sebastián Piñera. La acusación pasará al Senado.",
    image:
    "https://media.elmostrador.cl/2021/10/22b6bb00-sebastian-pinera-aton-1-scaled-1-1024x683-1-700x467-1.jpg",
    enlace: "",
  },
  {
    title:"Amenaza de nueva crisis migratoria en Europa  Hasta 4.000 migrantes se aglomeran en la frontera de Bielorrusia intentando cruzar a Polonia  Bruselas acusa al régimen de Lukashenko de promover la llegada en avión de migrantes de Oriente Medio en represalia a las sanciones.",
    image:"https://static.dw.com/image/59768891_303.jpg",
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

