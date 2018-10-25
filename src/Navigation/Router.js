import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './Sidebar';
import Content from './Content';

import './Router.css';

const Router = () => (
  <BrowserRouter>
    <div className='Router'>
      <Sidebar />
      <Content />
    </div>
  </BrowserRouter>
);

export default Router;
