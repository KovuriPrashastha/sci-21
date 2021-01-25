import React, { Component } from 'react';
import Primary from './components/primary';
import News from './components/news';
import Past from './components/past';
import Sponsors from './components/sponsors';
import ImportantDates from './components/importantDates';
import CopyRight from './components/copyRight';
import About from './components/about';
import NavBar from './../../NavBar.js';
class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar className='bar' title='Home' />
        </div>
        <div
          style={{
            paddingBottom: '0px',
            paddingTop: '0px',
            marginBottom: '0px',
            paddingLeft: '30px',
          }}
        >
          <Primary />
          <News />
          <Past />
          <About />
          <ImportantDates
            style={{
              paddingLeft: '50px',
            }}
          />
          <Sponsors />
          <CopyRight />
        </div>
      </div>
    );
  }
}

export default Home;
