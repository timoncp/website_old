import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import WorkPhilosophy from '../Pages/WorkPhilosophy';
import WebApplications from '../Pages/WebApplications';
import DataVisualization from '../Pages/DataVisualization';
import PreviousWork from '../Pages/PreviousWork';

import './Router.css';

export default () => (
  <Router>
    <div className='Router'>
      <div className='Content Wallpaper'>
        <Route exact path='/' component={Home} />
        <Route path='/work-philosophy' component={WorkPhilosophy} />
        <Route path='/web-applications' component={WebApplications} />
        <Route path='/data-visualization' component={DataVisualization} />
        <Route path='/previous-work' component={PreviousWork} />
      </div>
    </div>
  </Router>
);
