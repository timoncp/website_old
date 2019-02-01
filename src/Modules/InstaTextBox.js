import React, { useState } from 'react';
import classNames from 'classnames';
import Link from '../Navigation/Link';

import './InstaTextBox.css';

const palette = {
  pink: '#c32aa3',
  blue: '#42c8f4',
  green: '#8ee03c',
  yellow: '#f1d03b',
  red: '#ff6868'
};

function getSplitString (props) {
  const charsPerLine = props.charsPerLine || 20;
  let index = 0;
  let strings = [];

  while (index < props.text.length) {
    strings = strings.concat([
      props.text.substring(index, Math.min(index + charsPerLine, props.text.length))
    ]);

    index += charsPerLine;
  }
}

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
      <p
        style={stringStyle}
        className={classNames('InstaTextBox', {
          switch: isBoxHovered
        })}>
        {props.text}
      </p>
    </div>
  )
};

export default InstaTextBox;
