import React from 'react';
import SocialIcon from './SocialIcon';

import './Home.css';

const SocialBar = (props) => {
  return (
    <div className='SocialBar'>
      <SocialIcon name={props.name} />
      <span className='SocialBar-Label'>{props.label}</span>
    </div>
  )
};

const Contact = (props) => {
  return (
    <div className='Container'>
      <h1 className='Heading' id='homepage-handle'>
        {'@vanwhosville'}
      </h1>
      <div className='Socials-Container'>
        <SocialBar name='github' label='@timoncp' />
        <SocialBar name='linkedIn' label='Add me' />
        <SocialBar name='insta' label='@vanwhosville' />
        <SocialBar name='mail' label='Email' />
      </div>
    </div>
  );
}

export default Contact;
