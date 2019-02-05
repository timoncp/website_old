import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

import './Link.css';

const CustomRouterHashLink = (props) => {
  const hash = props.to.split('#')[1];

  return (
    <NavHashLink smooth
      {...props}
      className='CustomRouterLink'
      isActive={(match, location) => {
        return hash === location.hash.split('#')[1];
      }}
    />
  );
}

export default CustomRouterHashLink;
