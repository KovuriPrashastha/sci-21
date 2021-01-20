import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Image from '../../../assets/images/profile_image.jpg';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import Call from '@material-ui/icons/Call';
import { Email } from '@material-ui/icons';
import NavBar from '../../../NavBar.js';
import Button from '@material-ui/core/Button';
import history from './../../../history/history';
import CopyRight from './../../home/components/copyRight';
function Map() {
  return (
    <div>
      <iframe
        id='mapIframe'
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15230.603210403495!2d78.3826143!3d17.3805282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c30ca8d2ffb8734!2sVasavi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1574527933482!5m2!1sen!2sin'
        allowfullscreen='true'
        aria-setsize='40'
        style={{ border: 0, width: '100%', height: '100%' }}
      ></iframe>
      <br />
      <br />
      <br />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const facultyData = [
  {
    name: 'Dr. Nagaratna P. Hegde',
    contactNo: '+91 9440 236 781',
    dept: 'CSE',
    college: 'Vasavi College of Engineering',
    loc: 'Hyderabad, India',
  },
  {
    name: 'S Vinay Kumar',
    contactNo: '+91 9866 171 252',
    dept: 'CSE',
    college: 'Vasavi College of Engineering',
    loc: 'Hyderabad, India',
  },
  {
    name: 'M Sashi Kumar',
    contactNo: '+91 9885 127 504',
    dept: 'CSE',
    college: 'Vasavi College of Engineering',
    loc: 'Hyderabad, India',
  },
];

const contact = {
  phone: '+91 40 23146025',
  timings: 'Mon to Sat 9:30am to 4:30pm\n',
  email: 'sci2020@vce.ac.in',
};
function ImgMediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={Image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.contactNo}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.dept}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.college}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.loc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function ContactUs() {
  const layout = facultyData.map((faculty) => {
    return (
      <Grid item lg={4}>
        <ImgMediaCard
          name={faculty.name}
          contactNo={faculty.contactNo}
          dept={faculty.dept}
          college={faculty.college}
          loc={faculty.loc}
        />
      </Grid>
    );
  });
  return (
    <div>
      <div>
        <NavBar title='Contact Us' />
      </div>
      <Container>
        <Grid container spacing={3}>
          {layout}
        </Grid>
        <br />
        <Grid container>
          <Grid item lg={4}>
            <Call color='primary' style={{ fontSize: '50' }} />
            <Typography gutterBottom variant='h6' component='h2'>
              {contact.phone}
            </Typography>

            <Typography variant='body2' color='textSecondary' component='p'>
              {contact.timings}
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Email color='primary' style={{ fontSize: '50' }} />
            <Typography gutterBottom variant='h6' component='h2'>
              {contact.email}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Map />
        </Grid>
      </Container>
      <Container>
        <div className='bottomDiv'>
          <br />
          <br />
          <CopyRight />
        </div>
      </Container>
    </div>
  );
}
