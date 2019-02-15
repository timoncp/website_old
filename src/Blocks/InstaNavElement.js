import React from 'react';
import Link from '../Navigation/Link';

import './InstaNavElement.css';

const palette = {
  pink: '#ba3985',
  blue: '#42c8f4',
  green: '#8ee03c',
  yellow: '#f0c33b',
  red: '#e85353'
};

const InstaNavElement = (props) => {
  const underlineColor = {
    borderColor: palette[props.bgColor] || 'white'
  };

  const bgColor = {
    backgroundColor: palette[props.bgColor] || 'white'
  };

  return (
    <div
      onClick={props.onClick}
      className='InstaNavElement-Container'
      style={underlineColor}>
      <div style={bgColor} className='InstaNavElement-Background'></div>
      <Link to={props.linkTo}>
        <p className='InstaNavElement'>
          {props.text}
        </p>
      </Link>
    </div>
  )
};

export default InstaNavElement;
