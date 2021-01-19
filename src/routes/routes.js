import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history/history';
import Sidebar from '../Sidebar';

import Registration from '../components/registration/component/registration';
import AboutUs from '../components/aboutUs/aboutUs';
import ContactUs from '../components/contactUs/component/contactUs';
import Download from '../components/download/download';
import ImportantDates from '../components/importantDates/importantDates';
import Committes from '../components/committes/committes';
import Schedules from '../components/schedules/index';
import SpecialSessions from '../components/specialSessions/specialSessions';
import Speakers from '../components/speakers/component/speakers';
import CallForPaper from '../components/callForPaper/callForPaper.js';
import Travel from '../components/contactUs/component/travel';
import NearBy from '../components/contactUs/component/hotels';
import Home from './../components/home/index';

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/registration' component={Registration} />
            <Route path='/home' component={Home} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/schedules' component={Schedules} />
            <Route path='/speakers' component={Speakers} />
            <Route path='/download' component={Download} />
            <Route path='/specialsessions' component={SpecialSessions} />
            <Route path='/importantdates' component={ImportantDates} />
            <Route path='/contactus' component={ContactUs} />
            <Route path='/committes' component={Committes} />
            <Route path='/travel' component={Travel} />
            <Route path='/hotels' component={NearBy} />
            <Route path='/callforpapers' component={CallForPaper} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
