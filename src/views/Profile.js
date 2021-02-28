import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { FaBeer } from 'react-icons/fa';
import { GiCrownedHeart } from "react-icons/gi";



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  head : {
          lazy: true  ,
          backgroundColor: 'yellow',
  },
}));

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [
    {
    img: 'https://images.unsplash.com/photo-1528228377194-2faca82540e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    title: 'The Blue Fleece',
    description : 'Blue Laced Jacket',
    price : '50 GBP',
    },
    {
    img: 'https://images.unsplash.com/photo-1529771790449-1dcf5f520017?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    title: 'High Quality table cloth',
    featured: true,
    description : 'Hand-Woven Table Cloth [Medium Sized]',
    price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1590483736622-39da8acf7eb8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNuZWFrZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'ShowSneaks',
      featured: true,
      description : 'Custom Designed and Painted Sneakers [1 pair]',
      price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1583414169668-f65860b4dece?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'Sirona Cup',
      description : 'Sirona Multipurpose Cup - Heat Resistant',
      price : '29GBP',
    },
    
    {
      img: 'https://images.unsplash.com/photo-1486821416551-68a65ef4d618?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bG9ja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'Venus',
      description : 'Venus Fashion Locket',
      price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1602751584581-2e0372975b46?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8aW5maW5pdHklMjByaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'Nyaka Rings',
          description : 'High Quality Rings inspired by The Lord of the Rings!',
          price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1576107324820-c10884700b6b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vYmlsZSUyMGNhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'Apptronix',
          description : 'Cellphone Cases Set!',
          price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1612928414075-bc722ade44f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YXRobGV0aWMlMjBqYWNrZXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'Quechua',
          description : 'Athleisure Active Jacket',
            price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1525383666937-f1090096ca3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGxlYXRoZXIlMjBnbG92ZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'Enamor',
          description : 'Bike Apparel Set',
              price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1593989216105-bf59305eb565?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGVhcmluZ3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'Voylla',
          description : 'Glorious accesories, inspired by India. ',
          price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1480632563560-30f503c09195?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVuZGVudCUyMGdpZnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'ChicMela',
          description : 'Gift Set - Pendant and Earings',
          price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZW1icm9pZGVyZWQlMjBkcmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'Fashion Revolution',
          description : 'Embroidered dress for the Queens!',
          price : '29GBP',
    },
  ];
  
export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <IndexNavbar fixed />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">

            <Typography component="h1" variant="h2" align="center" color="textPrimary" style={{fontWeight:600}} gutterBottom>
              The Juna Bazaar!
            </Typography>

            <div className={classes.icon}>
              <GiCrownedHeart size="100px" color="gold" position="absolute" margin-left="20px" top="10px" />
            </div>
            <Typography style={{fontWeight:600}} variant="h5" align="center" color="textSecondary" fontWeight="bold" paragraph>
      
            Find your products!
            
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.img}
                    title= {card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                    <Typography>
                     {card.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant = "outlined" size="small" color="primary">
                      View
                    </Button>
                    <Button variant = "outlined" size="small" color="secondary">
                      Buy Now!
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
     <Footer/>
      {/* End footer */}
    </React.Fragment>
  );
}
