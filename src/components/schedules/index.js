import React, { Component } from 'react';
import { Button, Card, Container, Typography } from '@material-ui/core';
import CopyRight from '../home/components/copyRight';
import Sponsors from '../home/components/sponsors';
import NavBar from '../../NavBar.js';
import './index.css';
class Schedules extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar title='Schedules' />
        
        </div>
        
        {/* <div style={{ paddingTop: '15%', backgroundColor: '#f5f5f5' }}> */}
        <Container maxWidth='xs'>
          <Card
            style={{
              textAlign: 'justify',
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingBottom: '1%',
              paddingTop: '2%',
              marginTop: '5%',
              backgroundColor: '#e1f5fe',
              position: 'absolute',
            }}
          >
          
          <Typography variant='p' gutterBottom align='left'>
              Click here to view Program Schedule
            </Typography>
            <br />
            <div className='schedule'>
              <Button
                target='_blank'
                variant='outlined'
                href='https://vce.ac.in/icsci/docs/schedule.pdf'
                style={{ marginRight: '10%' }}
              >
                PROG SCHEDULE
              </Button>
            </div>
            <br />
            <br />
            <Typography variant='p' gutterBottom align='left'>
              Click here to view Track Schedule
            </Typography>
            <br />
            <div className='schedule'>
              <Button
                target='_blank'
                variant='outlined'
                href='https://vce.ac.in/icsci/docs/tracks.pdf'
                color='primary'
              >
                TRACK SCHEDULE
              </Button>
              </div>
          </Card>
          </Container>
          <div style={{ paddingTop: '10%' }}>
<<<<<<< HEAD
            
=======
            {/* <Sponsors /> */}
>>>>>>> 1e78c0b452dc9ed89dabe6b870cc9edcc054784e
            <div className="bottomDiv">
            <Sponsors/>
            <CopyRight />
            </div>
          </div>
        </div>
          
    );
  }
}

export default Schedules;
