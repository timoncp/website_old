import React, { useState } from 'react';
import classNames from 'classnames';
import Link from '../Navigation/Link';

import './NavBlock.css';

const NavBlock = (props) => {
  const [isDrawerVisible, setDrawerVisibility] = useState(false);

  return (
    <div
      className='NavBlocks-Block'
      onMouseEnter={() => setDrawerVisibility(true)}
      onMouseLeave={() => setDrawerVisibility(false)}>
      <div className={classNames('NavBlocks-Square', {
          glow: isDrawerVisible
        })}>
        <props.svg />
      </div>
      <div className='NavBlocks-SideRect-Wrapper'>
        <div className={classNames('NavBlocks-SideRect', {
          show: isDrawerVisible
        })}>
          <Link to={props.linkTo}>
            {props.drawerContent}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBlock;
