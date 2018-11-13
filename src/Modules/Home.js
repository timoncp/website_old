import React from 'react';

import PageSelector from '../Navigation/PageSelector';

import './Home.css';

export default () => (
  <div className='Wallpaper'>
    <h2 className='Heading'>
    {`Hi, my name is Tim.\nWhat would you like to see?\n`}
    </h2>
    <PageSelector />
  </div>
);
