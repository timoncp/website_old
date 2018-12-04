import React from 'react';
import { Route } from 'react-router-dom';

import { HomeModule, GeneralModules } from '../Modules';
import genericPage from '../Modules/GenericPageTemplate';

import './Content.css';

const Content = () => (
  <div className='Content Wallpaper'>
    <Route { ...HomeModule } />
    {
      GeneralModules.map(mod =>
        <Route { ...mod } component={genericPage(mod.component, mod.name)} key={mod.name} />
      )
    }
  </div>
);

export default Content;

