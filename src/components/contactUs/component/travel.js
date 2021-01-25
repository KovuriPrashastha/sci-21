import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Container, Grid } from '@material-ui/core';
import Image from '../../../assets/images/temp1.png';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import NavBar from '../../../NavBar.js';
import CopyRight from './../../home/components/copyRight';

const reach = [
  {
    id: 1,
    name: 'flight',
    content:
      'The Rajiv Gandhi International Airport is located 22 km from the city and is one of the best aviation facilities in the country. There is direct flight connectivity from many countries. The domestic connectivity is also excellent with Indian airlines like Air India, IndiGo, Spice Jet, etc operating from here. There are buses available at the airport to take you to the major points in the city.',
  },
  {
    id: 2,
    name: 'train',
    content:
      'Hyderabad is well connected by rail network to all parts of India. There are three major railway stations serving the city - Secunderabad, Hyderabad and Kachiguda railways stations. The trains bound for South and North India originate via Hyderabad and pass through Secunderabad. To get the list of trains and their schedules, please visit INDIAN RAIL. Domestic tourists can also book their tickets online at IRCTC.',
  },
  {
    id: 3,
    name: 'road',
    content:
      'Hyderabad is connected to all the major Metros by road. The government and private buses operate luxury and ordinary services from all the neighbouring States. The Jubilee Bus Station is located in Secunderabad and run direct bus services to and from Bangalore, Mumbai, and Chennai. MGBS operating in Hyderabad is the largest bus station in the world. It has a pickup and drop points from various parts of the city. NH 44 connects Hyderabad to a number of cities and towns in the state. Buses are available from all towns cities in Andhra and Telangana and major cities in Tamil Nadu, Maharashtra and Karnataka.',
  },
];

const local = [
  {
    id: 1,
    name: 'intro',
    content:
      'Hyderabad has a very smooth transportation system. State transport buses are the most preferable and convenient medium of commuting from one place to another in Hyderabad. Also, there are some local trains which connect some localities of the city but they are generally preferred by working class people.',
  },
  {
    id: 2,
    name: 'bus',
    content:
      'Bus fares will cost around five to ten bucks for most of the places depending upon the distance. However, the periodicity of bus arrival is very quick, that is, there are buses in a gap of 15-30mins for the next ride. The bus services commence at 4:30 AM and lasts till 12 in the morning.',
  },
  {
    id: 3,
    name: 'cabs',
    content:
      'Like every other metropolitan city, Hyderabad too has cabs, share-autos and rickshaw services. It is yet a substitute medium to go back and forth. Each of them have almost similar fares. However, cabs services such as Ola and Uber have fixed rates per kilometre whereas share-autos and rickshaws run on meters.',
  },
];

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const dataFormat = props.data.map((imp) => {
    return (
      <Accordion
        square
        expanded={expanded === 'panel' + imp.id}
        onChange={handleChange('panel' + imp.id)}
      >
        <AccordionSummary
          aria-controls={'panel' + imp.id + 'd-content'}
          id={'panel' + imp.id + 'd-header'}
        >
          <Typography>
            {imp.name === 'intro' ? imp.name : 'By ' + imp.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{imp.content}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
  return <div>{dataFormat}</div>;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const climate = {
  temp: '24°C (72°F) to 34°C (94°F)',
  hum: 'Very high heat and humidity',
  rain: '105 mm of monthly rainfall',
};

function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='elevation'>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {props.title}
        </Typography>
        <Typography variant='h5' component='h2'>
          {props.subtitle}
        </Typography>
        <Typography variant='body2' component='p'>
          {props.data}
        </Typography>
      </CardContent>
    </Card>
  );
}

function TemperatureCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='elevation'>
      <CardContent>
        <CardMedia image={Image} style={{ opacity: '1' }}>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.title}
          </Typography>
          <br />
          <br />
          <Typography variant='h5' component='h2'>
            {props.temp}
          </Typography>
          <br />
          <br />
          <Typography variant='h5' component='h2'>
            {props.hum}
          </Typography>
          <br />
          <br />
          <Typography variant='h5' component='h2'>
            {props.rain}
          </Typography>
        </CardMedia>
      </CardContent>
    </Card>
  );
}
export default function Travel() {
  const classes = useStyles();
  const places = [
    'Charminar',
    'Golkonda Fort',
    'Ramoji Film City',
    'Hussain Sagar Lake',
    'Chowmahalla Palace',
    'Salar Jung Museum',
  ];
  const visit = places.map((place) => {
    return (
      <Typography variant='h6' component='p'>
        {place}
      </Typography>
    );
  });
  return (
    <div>
      <div>
        <NavBar title='Travel' />
      </div>
      <Container
        style={{
          paddingLeft: '50px',
        }}
      >
        <Grid>
          <OutlinedCard
            data='Hyderabad, city, Telangana state, south-central India. It is Telangana’s largest and most-populous city and is the major urban centre for all of south-central interior India. Hyderabad has become a hub of trade and commerce and an international centre for information technology (IT). The Pearl City, Hyderabad with its unmatched blend of history and modernity, hypnotizes everyone, whoever sets his/her foot in this beautiful city of Nizams. With a history as old as 400 years and the status of metropolitan city, Hyderabad promises a unique refreshing experience to all. From historical monuments to natural getaways to mouth-watering world famous cuisine to appealing shopping places and thrilling entertainment parks, this city has it all to keep you glued.'
            subtitle=''
            title='About Hyderabad, Telangana, India'
          />
        </Grid>
        <br />
        <br />
        <Grid container spacing='4'>
          <Grid item lg={3} md={3}>
            <TemperatureCard
              temp={climate.temp}
              hum={climate.hum}
              rain={climate.rain}
              title='Climate During Month of June'
            />
          </Grid>
          <Grid item lg={3} md={3}>
            <Card variant='elevation'>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {'Places to visit in Hyderabad'}
                </Typography>
                {visit}
              </CardContent>
            </Card>
          </Grid>
          <Grid
            container
            lg={5}
            md={5}
            style={{
              paddingLeft: '30px',
            }}
          >
            <Grid item>
              <Typography gutterBottom variant='h5' component='h2'>
                {'How to reach Hyderabad'}
              </Typography>
              <CustomizedAccordions data={reach} />
            </Grid>
            <Grid item>
              <Typography gutterBottom variant='h5' component='h2'>
                {'Local transport in Hyderabad'}
              </Typography>
              <CustomizedAccordions data={local} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          paddingLeft: '50px',
        }}
      >
        <CopyRight />
      </div>
    </div>
  );
}
