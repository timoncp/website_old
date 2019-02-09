import React from 'react';
import Link from '../Navigation/HashLink';

import './SideNav.css';

const separator = <span>¦</span>;

const SideNav = (props) => (
  <div className='Page-SideNav'>
    <Link to='/previous-work/#landscapp'
      activeClassName='Page-SideNav-ActiveHash'>
      Landscapp
    </Link>
    {separator}
    <Link to='/previous-work/#creditsuisse'
      activeClassName='Page-SideNav-ActiveHash'>
      CreditSuisse
    </Link>
    {separator}
    <Link to='/previous-work/#findie'
      activeClassName='Page-SideNav-ActiveHash'>
      Findie
    </Link>
    {separator}
    <Link to='/previous-work/#bearingpoint'
      activeClassName='Page-SideNav-ActiveHash'>
      bearingpoint
    </Link>
    {separator}
    <Link to='/previous-work/#sbu'
      activeClassName='Page-SideNav-ActiveHash'>
      SBU
    </Link>
  </div>
);

export default SideNav;
