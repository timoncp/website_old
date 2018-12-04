import React from 'react';

import PageSelector from '../Navigation/PageSelector';

import './Home.css';

export default () => (
  <div className='Container'>
    <h1 className='Heading'>
    {`Hi, my name is Tim.\nWhat would you like to see?\n`}
    </h1>
    <PageSelector />
  </div>
);
