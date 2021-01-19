import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import tb from '../../../assets/images/Taramati-Baradari.png';
import ss from '../../../assets/images/spacious-stay.jpeg';
import aa from '../../../assets/images/arum-abode.jpg';
import gh from '../../../assets/images/golkonda.jpeg';
import pc from '../../../assets/images/Park-Continental.png';
import ma from '../../../assets/images/oyo 7495.jpg';
import mg from '../../../assets/images/Minerva-Grand.jpg';
import tl from '../../../assets/images/The-Lime.png';
import fab from '../../../assets/images/Fab.jpg';
import NavBar from '../../../NavBar.js';
import CopyRight from './../../home/components/copyRight';

const data = [
  { image: tb, name: 'Taramati-Baradari', dist: '1km' },
  {
    image: ss,
    name: 'OYO 33412 Spacious Stay',
    dist: '3km',
  },
  {
    image: aa,
    name: 'OYO 6661 Arum Abode',
    dist: '4km',
  },
  {
    image: gh,
    name: 'The Golkonda Hotel',
    dist: '11km',
  },
  {
    image: pc,
    name: 'Park Continental',
    dist: '11km',
  },
  {
    image: ma,
    name: 'OYO 7495 Manikonda',
    dist: '13km',
  },
  {
    image: mg,
    name: 'Minerva Grand',
    dist: '14km',
  },
  {
    image: tl,
    name: 'The Lime',
    dist: '15km',
  },
  {
    image: fab,
    name: 'Fab Hotels - The Prime',
    dist: '18km',
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.hotel.image}
          title={props.hotel.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.hotel.name}
          </Typography>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.hotel.dist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function NearBy() {
  const arrange = data.map((hotel) => {
    return (
      <Grid item style={{
        width: 500,
        height: 350,
      }} lg={4} md={4}>
        <MediaCard hotel={hotel} />
      </Grid>
    );
  });
  return (
    <div>
      <div>
        <NavBar title='Hotels' />
      </div>
      <Container>
        <h1>Nearby Hotels</h1>
        <Grid container spacing={3}>
          {arrange}
        </Grid>
      </Container>
      <CopyRight />
    </div>
  );
}
