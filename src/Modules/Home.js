import React, { useState } from 'react';
import classNames from 'classnames';
import Link from '../Navigation/Link';
import SocialIcon from './SocialIcon';

import SvgWeb from '../Resources/svg_web';
import SvgPerson from '../Resources/svg_person';
import SvgNetwork from '../Resources/svg_network';

import './Home.css';

const NavBlock = (props) => {
  const [isDrawerVisible, setDrawerVisibility] = useState(false);

  return (
    <div
      className='NavBlocks-Block'
      onMouseEnter={() => setDrawerVisibility(true)}
      onMouseLeave={() => setDrawerVisibility(false)}>
      <div className={classNames('NavBlocks-Square', {
          glow: isDrawerVisible
        })}>
        <props.svg />
      </div>
      <div className='NavBlocks-SideRect-Wrapper'>
        <div className={classNames('NavBlocks-SideRect', {
          show: isDrawerVisible
        })}>
          <Link to={props.linkTo}>
            {props.drawerContent}
          </Link>
        </div>
      </div>
    </div>
  );
};

const SocialBar = (props) => {
  return (
    <div className='SocialBar'>
      <SocialIcon name={props.name} />
      <span className='SocialBar-Label'>{props.label}</span>
    </div>
  )
};

const Home = (props) => {
  return (
    <div className='Container'>
      <h1 className='Heading' id='homepage-handle'>
        {'@vanwhosville'}
      </h1>
      <div className='NavBlocks'>
        <NavBlock
          svg={SvgPerson}
          drawerContent='About'
          linkTo='about' />
        <NavBlock
          svg={SvgWeb}
          drawerContent='Projects'
          linkTo='previous-work'
        />
        <NavBlock
          svg={SvgNetwork}
          drawerContent='Socials'
          linkTo='socials'
        />
      </div>
      <div className='Socials-Container'>
        <SocialBar name='github' label='@timoncp' />
        <SocialBar name='linkedIn' label='Add me' />
        <SocialBar name='insta' label='@vanwhosville' />
        <SocialBar name='mail' label='Email' />
      </div>
    </div>
  );
}

export default Home;
