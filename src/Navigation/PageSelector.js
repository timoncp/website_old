import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './PageSelector.css';

const caretBottom = (
  <svg viewBox="0 0 32 32" className="icon" aria-hidden="true">
    <path fill='white' d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/>
  </svg>
);

const caretTop = (
  <svg viewBox="0 0 32 32" className="icon" aria-hidden="true">
    <path fill='white' d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/>
  </svg>
);

export default () => {
  const [areOptionsVisible, setVisibility] = useState(false);

  return (
    <div className='PageSelector'>
      <div className='PageSelector-selected' onClick={() => setVisibility(!areOptionsVisible)}>
      Choose wisely...
      { areOptionsVisible ? caretTop : caretBottom }
      </div>
      {
        areOptionsVisible &&
        <ul className='PageSelector-list'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/other_things'>Other things</Link></li>
        </ul>
      }
    </div>
  );
}
