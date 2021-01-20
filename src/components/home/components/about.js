import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import welcomeBanner from '../../../assests/images/banner/welcomeBanner.jpg';
import '../css/home.css';

class About extends Component {
  render() {
    return (
      <div>
        <Grid class='homeAbout' container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '0px' }}>
            <img
              className='homeAboutImage'
              src={welcomeBanner}
              alt='welcome'
              height='300px'
              width='300px'
              align='center'
              padding-left='400px'
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className='homeAboutText'>
            <h1 className='aboutUsHeading'>ABOUT SCI-2021</h1>
            <p>
              The aim of the 5th International Conference on Smart Computing and
              Informatics (SCI-2021) is to present a unified platform for
              advanced and multi-disciplinary research towards the design of
              smart computing and informatics. The theme is on a broader front
              focuses on various innovation paradigms in system knowledge,
              intelligence and sustainability that may be applied to provide
              realistic solutions to varied problems in society, environment and
              industries. The scope is also extended towards the deployment of
              emerging computational and knowledge transfer approaches,
              optimizing solutions in various disciplines of science, technology
              and healthcare. The conference proceeding aims the publication of
              quality and unpublished work.
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default About;
