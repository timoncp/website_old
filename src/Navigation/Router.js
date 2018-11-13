import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Content from './Content';

import './Router.css';

export default () => (
  <BrowserRouter>
    <div className='Router'>
      <Content />
    </div>
  </BrowserRouter>
);
