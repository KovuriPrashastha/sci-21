import React, { Component } from 'react';
import { Container, Card, Button } from '@material-ui/core';
import Sponsors from '../home/components/sponsors';
import CopyRight from '../home/components/copyRight';
import NavBar from './../../NavBar.js';
import File from '../../assests/template.doc';
class Download extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar title='Downloads' />
        </div>
        <br />
        <br />
        <br />
        <br />
        <Container
          style={{
            paddingLeft: '65px',
          }}
        >
          <div className='col-lg-2 col-md-4 col-sm-6 col-xl-3'>
            <Button
              variant='outlined'
              color='primary'
              href='ftp://ftp.springernature.com/cs-proceeding/svproc/guidelines/Springer_Guidelines_for_Authors_of_Proceedings.pdf'
            >
              Springer Proceedings Guidelines for Authors
            </Button>
            <br />
            <br />
            <Button
              variant='outlined'
              color='primary'
              href='https://www.springer.com/gp/livingreviews/latex-templates'
              target='_blank'
            >
              Latex Template
            </Button>
            <br />
            <br />

            <Button variant='outlined' color='primary' download type='submit'>
              <a href={File} download='template.doc'>
                Download Word Template
              </a>
            </Button>
          </div>
        </Container>

        <div
          className='bottomDiv'
          style={{
            paddingLeft: '50px',
          }}
        >
          <Sponsors />
          <CopyRight />
        </div>
      </div>
    );
  }
}

export default Download;
