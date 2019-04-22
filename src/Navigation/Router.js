import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import NavHeader from './NavHeader';

import Home from '../Pages/Home';
import WorkPhilosophy from '../Pages/WorkPhilosophy';
import WebApplications from '../Pages/WebApplications';
import DataVisualization from '../Pages/DataVisualization';
import PreviousWork from '../Pages/PreviousWork';

import About from '../Pages/About';
import DevelopmentApproach from '../Pages/DevelopmentApproach';

import './Router.css';

export default () => (
  <Router>
    <div className='Router Content'>
      <div className='Wallpaper-Overlay'>
        <NavHeader />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/development-approach' component={DevelopmentApproach} />

        <Route path='/web-applications' component={WebApplications} />
        <Route path='/work-philosophy' component={WorkPhilosophy} />
        <Route path='/data-visualization' component={DataVisualization} />
        <Route path='/previous-work' component={PreviousWork} />
      </div>
    </div>
  </Router>
);
