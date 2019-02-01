import React from 'react';
import SocialIcon from './SocialIcon';

import './SocialLink.css';

const SocialLink = (props) => {
  return (
    <div className='SocialLink'>
      <a href={props.to}>
      </a>
      <SocialIcon name={props.icon} />
      <span className='SocialLink-Label'>{props.label}</span>
    </div>
  )
};

export default SocialLink;
