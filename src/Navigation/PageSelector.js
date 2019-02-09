import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import Link from './Link';

import modules from '../Pages';

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

const PageSelector = (props) => {
  const [areOptionsVisible, setVisibility] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleVisibilityChange);

    return () => {
      document.removeEventListener('click', handleVisibilityChange);
    };
  }, [areOptionsVisible]);

  function handleVisibilityChange(e) {
    const box = document.getElementsByClassName('PageSelector')[0];

    if (e.target !== box && !box.contains(e.target)) {
      setVisibility(false);
    }
  }

  const cls = classNames('PageSelector', {
    sm: props.size === 'sm'
  });

  return (
    <div className={cls}>
      <div
        className='PageSelector-selected'
        onClick={() => setVisibility(!areOptionsVisible)}
      >
      <span>Choose wisely...</span>
      { areOptionsVisible ? caretTop : caretBottom }
      </div>
      {
        areOptionsVisible &&
        <ul className='PageSelector-list'>
          {
            modules.map((mod, i) =>
              <li key={mod.name}>
                <Link to={mod.path}>
                  {mod.name}
                </Link>
              </li>
            )
          }
        </ul>
      }
    </div>
  );
};

export default withRouter(PageSelector);
