import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Content from './Content';

import './Router.css';

export default () => (
  <Router>
    <div className='Router'>
      <Content />
    </div>
  </Router>
);
