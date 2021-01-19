import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import CopyRight from '../home/components/copyRight';
import Sponsors from '../home/components/sponsors';
import NavBar from '../../NavBar.js';
class Schedules extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar title='Schedules' />
        </div>
        <div style={{ paddingTop: '15%', backgroundColor: '#f5f5f5' }}>
          <Button
            variant='outlined'
            href='https://vce.ac.in/icsci/docs/schedule.pdf'
            style={{ marginRight: '10%' }}
          >
            PROG SCHEDULE
          </Button>
          <Button
            variant='outlined'
            href='https://vce.ac.in/icsci/docs/tracks.pdf'
            color='primary'
          >
            TRACK SCHEDULE
          </Button>
          <div style={{ paddingTop: '10%' }}>
            <Sponsors />
            <div className="bottomDiv">
            <CopyRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedules;
