import React, { Component } from 'react';
import {
  CssBaseline,
  Container,
  Card,
  Grid,
  Divider,
  FormRow,
  Typography,
} from '@material-ui/core';
// import profImage1 from '../../../assets/images/prof1.png';
// import profImage2 from '../../../assets/images/prof2.png';
// import profImage3 from '../../../assets/images/prof3.png';
// import profImage4 from '../../../assets/images/prof4.png';
// import profImage5 from '../../../assets/images/prof5.png';
import CopyRight from '../../home/components/copyRight';
// import Sponsors from '../../home/components/sponsors';
import NavBar from '../../../NavBar.js';
import '../css/speakers.css';
import { Announcement } from '@material-ui/icons';
class Speakers extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar className='bar' title='Speakers' />
        </div>

        <div
          className='subDiv'
          style={{
            paddingLeft: '50px',
          }}
        >
          <Card
            style={{
              background: 'linear-gradient(rgba(40,9,150,0.5),transparent)',
              textAlign: 'center',
            }}
          >
            <Announcement style={{ height: '30px', width: '30px' }} />
            <p
              style={{
                display: 'inline',
                fontSize: '30px',
                marginLeft: '10px',
              }}
            >
              To be Updated soon !!!
            </p>
          </Card>
        </div>
        <div
          className='bottomDiv'
          style={{
            paddingLeft: '50px',
          }}
        >
          <CopyRight />
        </div>

        {/*}
        <CssBaseline />
        <Container style={{
          paddingLeft: '50px',
        }}>
          <div className='col-lg-2 col-md-4 col-sm-6 col-xl-3'>
            <h2>Speakers</h2>
            <Card>
              <h2 style={{ textAlign: 'left', marginLeft: '20px' }}>
                Chief Guest
              </h2>
              <Card style={{ margin: '10px', background: 'transparent' }}>
                <Grid container spacing={2} style={{ marginLeft: '10px' }}>
                  <Grid item>
                    <img
                      src={profImage1}
                      alt='Image1'
                      style={{
                        height: '150px',
                        width: '150px',
                        marginTop: '10px',
                      }}
                    />
                  </Grid>
                  <Grid item style={{ textAlign: 'left' }} xs={10} sm={8}>
                    <p className='textStyle1'>Dr.Ramchandram</p>
                    <p className='textStyle2'>Vice-Chancellor</p>
                    <p className='textStyle2'>Anurag University, Hyderabad</p>
                  </Grid>
                </Grid>
              </Card>
              <Divider />
              <h2 style={{ textAlign: 'left', marginLeft: '20px' }}>
                Distinguished Guest and Keynote Speaker
              </h2>
              <Card style={{ margin: '10px', background: 'transparent' }}>
                <Grid container spacing={2} style={{ marginLeft: '10px' }}>
                  <Grid item>
                    <img
                      src={profImage2}
                      alt='Image1'
                      style={{
                        height: '150px',
                        width: '150px',
                        marginTop: '10px',
                      }}
                    />
                  </Grid>
                  <Grid item style={{ textAlign: 'left' }} xs={10} sm={8}>
                    <p className='textStyle1'>Dr. Roman Senkerik</p>
                    <p className='textStyle2'>Head of AI lab</p>
                    <p className='textStyle2'>
                      Tomas Bata University in Zlin, Czech Republic
                    </p>
                    <p className='textStyle2'>Faculty of Applied Informatics</p>
                    <p className='textStyle2'>
                      Department of Informatics and Artificial Intelligence
                    </p>
                  </Grid>
                </Grid>
              </Card>

              <Divider />
              <h2 style={{ textAlign: 'left', marginLeft: '20px' }}>
                KeyNote Speakers
              </h2>

              <Card style={{ margin: '10px', background: 'transparent' }}>
                <Grid container spacing={2} style={{ marginLeft: '10px' }}>
                  <Grid item>
                    <img
                      src={profImage3}
                      alt='Image3'
                      style={{
                        height: '150px',
                        width: '150px',
                        marginTop: '10px',
                      }}
                    />
                  </Grid>
                  <Grid item style={{ textAlign: 'left' }} xs={10} sm={8}>
                    <p className='textStyle1'>Ms. Krupa Rajendran</p>
                    <p className='textStyle2'>Associate Vice President</p>
                    <p className='textStyle2'>
                      Delivery Head in Healthcare Vertical
                    </p>
                    <p className='textStyle2'>HCL Technologies</p>
                  </Grid>
                </Grid>
              </Card>

              <Card style={{ margin: '10px', background: 'transparent' }}>
                <Grid container spacing={2} style={{ marginLeft: '10px' }}>
                  <Grid item>
                    <img
                      src={profImage4}
                      alt='Image1'
                      style={{
                        height: '150px',
                        width: '150px',
                        marginTop: '10px',
                      }}
                    />
                  </Grid>
                  <Grid item style={{ textAlign: 'left' }} xs={10} sm={8}>
                    <p className='textStyle1'>Shri. Shankarnarayan Bhat</p>
                    <p className='textStyle2'>Director Engineering</p>
                    <p className='textStyle2'>
                      Intel Technologies India Pvt. Ltd.
                    </p>
                  </Grid>
                </Grid>
              </Card>

              <Card style={{ margin: '10px', background: 'transparent' }}>
                <Grid container spacing={2} style={{ marginLeft: '10px' }}>
                  <Grid item>
                    <img
                      src={profImage5}
                      alt='Image1'
                      style={{
                        height: '150px',
                        width: '150px',
                        marginTop: '10px',
                      }}
                    />
                  </Grid>
                  <Grid item style={{ textAlign: 'left' }} xs={10} sm={8}>
                    <p className='textStyle1'>Shri. Aninda Bose</p>
                    <p className='textStyle2'>
                      Senior Editor – Interdisciplinary Applied Sciences
                    </p>
                    <p className='textStyle2'>Publishing Department</p>
                    <p className='textStyle2'>Springer Nature</p>
                  </Grid>
                </Grid>
              </Card>
            </Card>
          </div>
        </Container>
        <Sponsors />
        <CopyRight /> */}
      </div>
    );
  }
}

export default Speakers;
