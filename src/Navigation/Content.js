import React from 'react';
import { Route } from 'react-router-dom';

import { HomeModule, GeneralModules } from '../Modules';

import './Content.css';

const Content = () => (
  <div className='Content Wallpaper'>
    <Route { ...HomeModule } />
    {
      GeneralModules.map(mod =>
        <Route { ...mod } component={mod.component} key={mod.name} />
      )
    }
  </div>
);

export default Content;

