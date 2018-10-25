import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = () => (
  <div className='Sidebar'>
    <ul className='Sidebar-list'>
      <li className='Sidebar-list-item'>
        <Link to='/'>Home</Link>
      </li>
      <li className='Sidebar-list-item'>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li className='Sidebar-list-item'>
        <Link to='/other_things'>Other things</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;

