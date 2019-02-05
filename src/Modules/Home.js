import React from 'react';
import InstaTextBox from '../Blocks/InstaTextBox';
import SocialIcon from '../Blocks/SocialIcon';

import './Home.css';

const Home = (props) => {
  return (
    <div className='Container'>
      <div className='PersonalCorner'>
        © Timon Carneci-Pröve, ca. 2019
      </div>
      <div className='SocialCorner'>
        <SocialIcon
          name='github'
          label='@timoncp'
          url='https://github.com/timoncp'
        />
        <SocialIcon
          name='linkedIn'
          label={'Let\'s connect!'}
          url='https://www.linkedin.com/in/timoncp/'
        />
        <SocialIcon
          name='insta'
          label='@vanwhosville'
          url='https://www.instagram.com/vanwhosville/'
        />
        <SocialIcon
          name='twitter'
          label='@vanwhosville'
          url='https://twitter.com/vanwhosville'
        />
      </div>
      <div className='Navigation'>
        <h1 className='Heading' id='homepage-handle'>
          {'@vanwhosville'}
        </h1>
        <div className='NavBlocks'>
          <InstaTextBox
            text='web applications'
            bgColor='blue'
            linkTo='previous-work'
          />
          <InstaTextBox
            text='data visualization'
            bgColor='red'
            linkTo='about'
          />
          <InstaTextBox
            text='dev guidance'
            bgColor='yellow'
            linkTo='previous-work'
          />
          <InstaTextBox
            text='previous work'
            bgColor='pink'
            linkTo='previous-work'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
