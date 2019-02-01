import React from 'react';
import PageSelector from '../Navigation/PageSelector';

import './GenericPageTemplate.css';

export default (Component, pageTitle) => {
  return (props) => {
    return (
      <div className='GenericPage'>
        <div className='GenericPage-top-bar'>
          <h3 className='GenericPage-heading'>{pageTitle}</h3>
          <PageSelector size='sm' />
        </div>
        <div className='GenericPage-content-area'>
          <Component {...props} />
        </div>
      </div>
    );
  };
}
