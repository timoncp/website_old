import React, { useState } from 'react';
import classNames from 'classnames';
import Link from '../Navigation/Link';

import './InstaTextBox.css';

const palette = {
  pink: '#cc2a89',
  blue: '#42c8f4',
  green: '#8ee03c',
  yellow: '#f0c33b',
  red: '#e85353'
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
