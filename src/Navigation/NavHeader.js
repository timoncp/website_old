import React from 'react';
import Link from '../Navigation/Link';
import InstaNavElement from '../Blocks/InstaNavElement';

import './NavHeader.css';

const NavHeader = (props) => {
  return (
    <header className='Page-NavHeader'>
      <div className='Page-NavHeader-LogoSide'>
        <div className='LogoText'>
          <span className='LogoText-Title'>timoncp.io</span>
          <span className='LogoText-SubTitle'>fullstack developer</span>
        </div>
      </div>
      <div className='Page-NavHeader-NavMenu'>
        <InstaNavElement
          text='about'
          bgColor='red'
          linkTo='about'
        />
        <InstaNavElement
          text='process'
          bgColor='yellow'
          linkTo='process'
        />
        <InstaNavElement
          text='previous work'
          bgColor='blue'
          linkTo='previous_work'
        />
        <InstaNavElement
          text='contact'
          bgColor='pink'
          linkTo='contact'
        />
      </div>
    </header>
  );
};

export default NavHeader;
