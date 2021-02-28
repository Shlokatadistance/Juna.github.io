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
  icon_1:{
    marginRight: theme.spacing(29),
    marginLeft: theme.spacing(29),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    backgroundColor: "#D0A563",
    border: "2px solid",

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
    paddingTop: '70.5%', // 16:9
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
  texte :{
    colorPrimary : '#DOA512',
  },
}));

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [
    {
    img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Stine Makes Things',
    description : 'Christine Chung',
    price : '50 GBP',
    },
    {
    img: 'https://images.unsplash.com/photo-1573497161529-95eb65b7a2fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    title: 'Sunny Shop LA',
    featured: true,
    description : 'Kathleen LeSuer',
    price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      title: 'Why Wake Print Shop',
      featured: true,
      description : 'Sadie Birchfield',
      price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1573496527892-904f897eb744?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Sparrow',
      description : 'Litza Guadalupe',
      price : '29GBP',
    },
    
    {
      img: 'https://images.unsplash.com/photo-1573496130141-209d200cebd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
      title: 'Cleo',
      description : 'Jillian Kramer and Jenny Singer',
      price : '29GBP',
    },
    {
      img: 'https://images.pexels.com/photos/6869551/pexels-photo-6869551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Wick and Wax',
          description : 'Eliza Wallace',
          price : '29GBP',
    },
    {
      img: 'https://images.pexels.com/photos/4473504/pexels-photo-4473504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Roses and Violets',
          description : 'Natasha Steinfield',
          price : '29GBP',
    },
    {
       img: 'https://images.pexels.com/photos/5414010/pexels-photo-5414010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'SteelGrits',
          description : 'Judy Trudy',
            price : '29GBP',
    },
    {
      img: 'https://images.pexels.com/photos/5409662/pexels-photo-5409662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Enamor',
          description : 'Amy Santiago',
              price : '29GBP',
    },
    {
      img : 'https://images.pexels.com/photos/3277806/pexels-photo-3277806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'SoundHound',
          description : 'Priyanka Sharma',
          price : '29GBP',
    },
    {
      img : 'https://images.pexels.com/photos/4473506/pexels-photo-4473506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Chopsticks and More',
          description : 'Eleena Bedford',
          price : '29GBP',
    },
    {
      img: 'https://images.unsplash.com/photo-1489442025433-416cb11a4765?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwc2hvcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'FashionDesk',
          description : 'Mary Rutherford',
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
          <div className={classes.texte}>

            <Typography component="h1" variant="h2" align="center" style={{fontWeight:600}} gutterBottom>
              Join us in celebrating Women-owned shops everyday!
            </Typography>
          </div>

            <div className={classes.icon}>
              <GiCrownedHeart size="100px" color="gold" position="absolute" margin-left="20px" top="10px" />
            </div>
            <Typography style={{fontWeight:600}} variant="h5" align="center" color="textSecondary" fontWeight="bold" paragraph>
      
            Featured Shops
            
            </Typography>
            <div className={classes.icon_1}>
            <Button size="small" color="black" align="center">
            Join Us!
            </Button>
            </div>

          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={15} sm={8} md={6}>
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
                  </CardContent>
                  <CardActions>
                    <Button variant = "outlined" size="small" color="primary">
                      View
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
