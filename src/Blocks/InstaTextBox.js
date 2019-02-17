import React, { useState } from 'react';
import classNames from 'classnames';
import Link from '../Navigation/Link';

import './InstaTextBox.css';

const palette = {
  pink: '#ba3985',
  blue: '#42c8f4',
  green: '#8ee03c',
  yellow: '#f0c33b',
  red: '#e85353'
};

const InstaTextBox = (props) => {
  const [isBoxHovered, handleBoxHover] = useState(false);

  const stringStyle = {
    backgroundColor: palette[props.bgColor] || 'black'
  };

  return (
    <div
      onClick={props.onClick}
      onMouseEnter={() => handleBoxHover(true)}
      onMouseLeave={() => handleBoxHover(false)}
      className='InstaTextBox-Container'>
      <Link to={props.linkTo}>
        <p
          style={stringStyle}
          className={classNames('InstaTextBox', {
            hovered: isBoxHovered
          })}>
          {props.text}
        </p>
      </Link>
    </div>
  )
};

export default InstaTextBox;
