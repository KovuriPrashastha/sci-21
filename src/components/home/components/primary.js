import React, { Component } from 'react';
// import {Grid} from '@material-ui/core';
// import csi from '../../../assests/images/banner/csi.png';
// import springer from '../../../assests/images/banner/springer.png';
import '../css/home.css';

class Primary extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#f5f5f5',
          marginTop: '0px',
          paddingTop: '20px',
          paddingBottom: '10px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '5%',
            marginLeft: '5%',
            marginRight: '5%',
          }}
        >
          <h1 className="aboutUsHeading">
            5th INTERNATIONAL CONFERENCE ON SMART COMPUTING AND INFORMATICS
            (SCI-2021)
          </h1>
          <h1 className="aboutUsHeading">17-18 September</h1>
          <h3> Organized by</h3>
          <h1 className="aboutUsHeading">
            Department of Computer Science and Engineering Vasavi College of
            Engineering (Autonomous) Hyderabad, Telangana, India
          </h1>
        </div>
      </div>
    );
  }
}

export default Primary;
{
  /* <Grid item xs={3} style={{marginLeft:'30px'}}>
                        <img src={csi} alt="CSI" width="auto" height="100px" style={{marginTop:"50px"}}/>
                        <img src={springer} alt="springer" width="150%" height="100px" style={{marginTop:"100px"}}/>
                    </Grid> */
}
