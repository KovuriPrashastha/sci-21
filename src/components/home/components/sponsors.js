import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import teckLogo from '../../../assests/images/sponsors/teklogo.jpg';
import '../css/home.css';

class Sponsors extends Component {
  render() {
    return (
      <div className='sponsor'>
        {/* <h2>Conference Sponsor</h2>
                <Grid container spacing={3}>
                    <Grid className="sponsorImage" item xs={12} sm={6} md={4} lg={3} style={{marginRight:"0px"}}>
                        <img src={teckLogo} alt="teckLogo" width="200px" height="100px"/>
                    </Grid>
                    <Grid className="sponsorImage" item xs={12} sm={6} md={4} lg={3}>
                        <img src={teckLogo} alt="teckLogo" width="200px" height="100px"/>
                    </Grid>
                    <Grid className="sponsorImage" item xs={12} sm={6} md={4} lg={3}>
                        <img src={teckLogo} alt="teckLogo" width="200px" height="100px"/>
                    </Grid>
                </Grid> */}
      </div>
    );
  }
}

export default Sponsors;
