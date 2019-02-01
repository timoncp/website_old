import React from 'react';
import InstaTextBox from './InstaTextBox';
import SocialBar from './SocialBar';

import './Home.css';

const Home = (props) => {
  return (
    <div className='Container'>
      <div className='Navigation'>
        <h1 className='Heading' id='homepage-handle'>
          {'@vanwhosville'}
        </h1>
        <div className='NavBlocks'>
          <InstaTextBox
            text='web applications'
            bgColor='blue'
            charsPerLine={60}
          />
          <InstaTextBox
            text='data visualization'
            bgColor='red'
            charsPerLine={60}
          />
          <InstaTextBox
            text='dev guidance'
            bgColor='yellow'
            charsPerLine={60}
          />
          <InstaTextBox
            text='previous work'
            bgColor='pink'
            charsPerLine={60}
          />
        </div>
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
