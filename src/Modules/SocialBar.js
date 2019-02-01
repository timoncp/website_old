import React from 'react';
import SocialIcon from './SocialIcon';

import './SocialBar.css';

const SocialBar = (props) => {
  return (
    <div className='SocialBar'>
      <SocialIcon name={props.name} />
      <span className='SocialBar-Label'>{props.label}</span>
    </div>
  )
};

export default SocialBar;
