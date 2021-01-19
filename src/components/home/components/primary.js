import React, { Component } from 'react';
// import {Grid} from '@material-ui/core';
import csi from '../../../assests/images/banner/csi.png';
import logo from '../../../assests/images/banner/logo.png';
import springer from '../../../assests/images/banner/springer.png';
import '../css/home.css';

class Primary extends Component {
  render() {
    return (
      
        <div className="firstComponent"
          style={{
            textAlign: 'center',
            padding: '5%',
            backgroundColor:"#007984",
            color:"#fff"
          }}
        >
          <h1 className="aboutUsHeading">
            5th INTERNATIONAL CONFERENCE ON SMART COMPUTING AND INFORMATICS
            (SCI-2021)
          </h1>
          <img src={csi} alt="previous" width="100px" height="100px"/>
          <img src={springer} alt="previous" width="170px" height="100px" style={{marginLeft:"15%"}}/>
          <h1 className="aboutUsHeading" style={{color:"black"}}>17-18 September</h1>
          <h3> Organized by</h3>
          <table style={{border:"none"}}>
            <tbody style={{border:"none"}}>
              <td style={{border:"none"}}>
          <img src={logo} alt="previous" width="100px" height="100px" style={{display:"inline"}}/>
          </td>
          <td style={{border:"none",textAlign:"center"}}>
          <h1 className="aboutUsHeading" style={{display:"inline"}}>
            Department of Computer Science and Engineering Vasavi College of
            Engineering (Autonomous) Hyderabad, Telangana, India
          </h1>
          </td>
          </tbody>
          </table>
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
