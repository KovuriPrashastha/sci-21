import React from 'react';

// import { db } from '../../Firebase';
// import { useState, useEffect } from 'react';
import './importantDates.css';
import NavBar from './../../NavBar.js';
import { Typography, Container, Grid } from '@material-ui/core';
import CopyRight from './../home/components/copyRight';

export default function ImportantDates() {
  // const [dates, setDates] = useState([]);
  // useEffect(() => {
  //   db.collection('dates')
  //     .get()
  //     .then((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => doc.data());
  //       console.log(data);
  //       setDates(
  //         querySnapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           product: doc.data(),
  //         }))
  //       );
  //     });
  //   console.log(dates);
  // }, []);
  return (
    <div>
      <Container>
        <div>
          <NavBar className='bar' title='Important Dates' />
        </div>
        <Grid
          container
          alignItems='center'
          justify='center'
          style={{
            paddingLeft: '50px',
          }}
        >
          <Grid item className='dates' lg={6} md={8} sm={12}>
            <table align='left'>
              <tr>
                <td>Paper submission Last Date</td>
                <td>
                  12<span style={{ 'vertical-align': 'super' }}>th</span> June,
                  2021
                </td>
              </tr>
              <tr>
                <td>Notification of Acceptance</td>
                <td>
                  19<span style={{ 'vertical-align': 'super' }}>th</span> June,
                  2021
                </td>
              </tr>
              <tr>
                <td>Registration Fee Payment</td>
                <td>
                  26<span style={{ 'vertical-align': 'super' }}>th</span> June,
                  2021
                </td>
              </tr>
              {/* <tr>
                <td>
                  Final Submission (CRC & Springer Publishing Agreement Form)
                </td>
                <td>
                  Guidelines and Dates of Submission will be declared after the
                  conference.
                </td>
              </tr> */}
            </table>
            <br />
            <br />
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            paddingLeft: '50px',
          }}
        >
          <Grid item lg={12} md={12} sm={12}>
            <Typography variant='h6'>
              Venue: QEEE HALL , Vasavi College of Engineering(Autonomous),
              Hyderabad, Telangana, India
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <div
        className='bottomDiv'
        style={{
          paddingLeft: '50px',
        }}
      >
        <CopyRight />
      </div>
    </div>
  );
}
